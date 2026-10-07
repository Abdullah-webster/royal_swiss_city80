<?php
/**
 * Royal Swiss City - Enquiry Form API
 * Receives form submissions, saves them into MySQL, and sends an email notification.
 */

// Allow CORS & set JSON response header
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only accept POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["success" => false, "message" => "Method not allowed"]);
    exit();
}

// =============================================================================
// DATABASE CONFIGURATION
// (Configured for royalswi_rsc)
// =============================================================================
$db_host = "localhost";
$db_name = "royalswi_rsc";
$db_user = "royalswi_royalswi";
$db_pass = ';zfC]EvT5KrWdtxi';

// Notification recipient
$admin_email = "admin@royalswisscity.com";

// =============================================================================
// PARSE INPUT DATA
// =============================================================================
$raw_input = file_get_contents("php://input");
$data = json_decode($raw_input, true);

if (!$data) {
    $data = $_POST; // Fallback to standard POST data
}

$full_name    = isset($data['fullName']) ? trim($data['fullName']) : '';
$company_name = isset($data['companyName']) ? trim($data['companyName']) : '';
$email        = isset($data['email']) ? trim($data['email']) : '';
$phone        = isset($data['phone']) ? trim($data['phone']) : '';
$city         = isset($data['city']) ? trim($data['city']) : '';
$enquiry_type = isset($data['enquiryType']) ? trim($data['enquiryType']) : '';
$plot_size    = isset($data['plotSize']) ? trim($data['plotSize']) : '';
$message      = isset($data['message']) ? trim($data['message']) : '';

// Validation
if (empty($full_name) || empty($email) || empty($phone)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Please fill all required fields (Full Name, Email, Phone)."
    ]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Please provide a valid email address."
    ]);
    exit();
}

// =============================================================================
// SAVE TO DATABASE
// =============================================================================
$db_saved = false;
$db_error = null;

try {
    // Only connect if db credentials have been set
    if ($db_name !== "YOUR_DATABASE_NAME" && !empty($db_name)) {
        $dsn = "mysql:host={$db_host};dbname={$db_name};charset=utf8mb4";
        $pdo = new PDO($dsn, $db_user, $db_pass, [
            PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES   => false,
        ]);

        $stmt = $pdo->prepare("
            INSERT INTO enquiries 
            (full_name, company_name, email, phone, city, enquiry_type, plot_size, message, status) 
            VALUES 
            (:full_name, :company_name, :email, :phone, :city, :enquiry_type, :plot_size, :message, 'New')
        ");

        $stmt->execute([
            ':full_name'    => $full_name,
            ':company_name' => $company_name,
            ':email'        => $email,
            ':phone'        => $phone,
            ':city'         => $city,
            ':enquiry_type' => $enquiry_type,
            ':plot_size'    => $plot_size,
            ':message'      => $message,
        ]);

        $db_saved = true;
    }
} catch (PDOException $e) {
    // Log error internally, do not expose raw credentials or schema to the client
    error_log("Database Error: " . $e->getMessage());
    $db_error = $e->getMessage();
}

// =============================================================================
// SEND EMAIL NOTIFICATION
// =============================================================================
$subject = "New Enquiry from " . $full_name . " - Royal Swiss City";
$email_body = "You have received a new enquiry from the Royal Swiss City website.\n\n"
            . "----------------------------------------\n"
            . "Name:         " . $full_name . "\n"
            . "Company:      " . ($company_name ?: "N/A") . "\n"
            . "Email:        " . $email . "\n"
            . "Phone:        " . $phone . "\n"
            . "City:         " . ($city ?: "N/A") . "\n"
            . "Enquiry Type: " . ($enquiry_type ?: "N/A") . "\n"
            . "Plot Size:    " . ($plot_size ?: "N/A") . "\n"
            . "Date:         " . date("Y-m-d H:i:s") . "\n"
            . "----------------------------------------\n\n"
            . "Message:\n" . ($message ?: "No additional message.") . "\n";

$headers = "From: Royal Swiss City <no-reply@" . $_SERVER['SERVER_NAME'] . ">\r\n"
         . "Reply-To: " . $email . "\r\n"
         . "X-Mailer: PHP/" . phpversion();

@mail($admin_email, $subject, $email_body, $headers);

// Return response
http_response_code(200);
echo json_encode([
    "success"  => true,
    "message"  => "Thank you! Your enquiry has been received successfully. Our team will contact you shortly.",
    "db_saved" => $db_saved
]);
exit();
