-- Royal Swiss City - Database Schema for Enquiries
-- Import this SQL file into your cPanel phpMyAdmin or MySQL Database

CREATE TABLE IF NOT EXISTS `enquiries` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `full_name` VARCHAR(255) NOT NULL,
  `company_name` VARCHAR(255) DEFAULT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(50) NOT NULL,
  `city` VARCHAR(100) DEFAULT NULL,
  `enquiry_type` VARCHAR(100) DEFAULT NULL,
  `plot_size` VARCHAR(100) DEFAULT NULL,
  `message` TEXT DEFAULT NULL,
  `status` VARCHAR(50) DEFAULT 'New',
  `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
