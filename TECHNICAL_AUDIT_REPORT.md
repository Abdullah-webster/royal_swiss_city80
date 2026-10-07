# Royal Swiss City 75 - Complete Technical Audit & Migration Specification

**Project Name:** `royal-swiss-city-75` / **Royal Swiss City 75**  
**Inspection Type:** Technical Audit & Pre-Migration Assessment  
**Generated At:** 2026-09-30  

---

## 1. PROJECT STRUCTURE

```
Royal-Swiss-City-75/
├── .env.example                               # Sample environment variable template
├── .gitignore                                 # Git ignore rules
├── .prettierrc / .prettierignore              # Prettier formatting config
├── .vercelignore / vercel.json                # Vercel deployment configuration
├── components.json                            # shadcn/ui component generator config
├── enquiries.sql                              # MySQL table schema for enquiries table
├── package.json                               # Package manifest, scripts, & dependencies
├── package-lock.json                          # Lockfile for npm dependencies
├── tsconfig.json                              # Main TypeScript compiler configuration
├── tsconfig.node.json                         # Node/Vite specific TS configuration
├── vite.config.ts                             # Vite build & dev server configuration
├── template.json                              # Project scaffolding template definition
├── CPANEL_UPLOAD_INSTRUCTIONS.md              # Deployment guide for cPanel / shared hosts
├── DEPLOY_NOW_SEO_OPTIMIZED.md                # SEO & deployment reference documentation
├── README.md                                  # Repository overview and instructions
│
├── patches/                                   # Local package patches
│   └── wouter@3.7.1.patch                     # Patch applied to wouter router
│
├── server/                                    # Node.js / Express Server Source
│   └── index.ts                               # Production Express static & SPA fallback server
│
├── shared/                                    # Code shared between frontend and server
│   └── const.ts                               # Shared constants (COOKIE_NAME, ONE_YEAR_MS)
│
├── client/                                    # Frontend React Application Root
│   ├── index.html                             # Single Page Application HTML entry point
│   ├── public/                                # Static assets served directly at domain root
│   │   ├── .htaccess                          # Apache rewrite rules, caching & gzip headers
│   │   ├── robots.txt                         # Search engine crawler instructions
│   │   ├── sitemap.xml / sitemap-urdu.xml     # XML Sitemaps for search engines
│   │   ├── sitemap.html                       # HTML Sitemap for users and crawlers
│   │   ├── llms.txt                           # LLM web documentation descriptor
│   │   ├── enquiries.sql                      # Duplicate copy of enquiries SQL schema
│   │   ├── api/                               # Form Handling API
│   │   │   └── enquire.php                    # PHP backend script (MySQL PDO + email notification)
│   │   └── [media assets]                     # Images (.webp, .jpg, .svg) and videos (.mp4)
│   │
│   └── src/                                   # React Source Code
│       ├── main.tsx                           # React 19 DOM mount entry point
│       ├── App.tsx                            # Root component with Wouter routing & layout
│       ├── index.css                          # Master stylesheet (Tailwind v4 + custom tokens)
│       ├── const.ts                           # Client runtime constants & OAuth helper
│       ├── config/
│       │   └── seo.ts                         # Comprehensive SEO metadata configuration
│       ├── components/
│       │   ├── Breadcrumb.tsx                 # Breadcrumb navigation with schema.org
│       │   ├── ErrorBoundary.tsx              # React Error Boundary
│       │   ├── FloatingContacts.tsx           # Floating WhatsApp, Call, and Email widget
│       │   ├── HeroCapsuleAnimation.tsx       # GSAP-driven hero expander animation
│       │   ├── Map.tsx                        # Google Maps API integration component
│       │   ├── ProjectsCarousel.tsx           # Horizontal project slider
│       │   ├── SEOHead.tsx                    # Dynamic document head & JSON-LD injector
│       │   ├── ShowcaseCarousel.tsx           # Luxury visual showcase slider
│       │   ├── ArchivedSheet.tsx / ManusDialog.tsx # Auxiliary UI dialogs
│       │   └── ui/                            # 53 reusable UI components (Radix + Tailwind)
│       ├── hooks/                             # Custom React hooks (useMobile, useComposition, usePersistFn)
│       ├── lib/
│       │   └── utils.ts                       # ClassName merge utility (clsx + twMerge)
│       ├── pages/
│       │   ├── Home.tsx                       # Master landing page
│       │   ├── Developer.tsx                  # Habib Rafiq (HRL CONSTRUCTION PVT LIMITED) developer overview
│       │   ├── Projects.tsx                   # Projects portfolio page
│       │   ├── TheCity.tsx                    # City master plan & amenity overview
│       │   ├── FAQ.tsx                        # Frequently Asked Questions & Accordions
│       │   ├── Enquire.tsx                    # Lead generation & booking form
│       │   └── NotFound.tsx                   # 404 Error handling view
│       └── utils/
│           └── sectionAnimations.ts           # GSAP ScrollTrigger intersection animation utils
│
└── dist/                                      # Build Output Directory (generated by `npm run build`)
    ├── index.js                               # Bundled Express server entry file
    └── public/                                # Built static HTML, JS, CSS, and asset bundles
```

---

## 2. TECHNOLOGY STACK

* **Frontend Framework:** React 19 (`react@^19.2.1`, `react-dom@^19.2.1`)
* **Routing Library:** Wouter (`wouter@^3.3.5`)
* **Animation & Motion:** GSAP (`gsap@^3.15.0`) & Framer Motion (`framer-motion@^12.23.22`)
* **Backend Runtime (Node):** Node.js runtime executing Express (`express@^4.21.2`), bundled with `esbuild` (`esbuild@^0.25.0`)
* **Backend Runtime (Form API):** PHP (version 7.4+ or 8.x) with PDO MySQL extension enabled (`client/public/api/enquire.php`)
* **Programming Languages:** TypeScript 5.6.3, JavaScript (ESM), PHP, SQL, HTML5, CSS3
* **Build Tools:** Vite 7.1.7 (`@vitejs/plugin-react@^5.0.4`) and esbuild 0.25.0
* **CSS Framework & Styling:** Tailwind CSS v4 (`tailwindcss@^4.1.14`, `@tailwindcss/vite@^4.1.3`, `@tailwindcss/typography@^0.5.15`, `tw-animate-css@^1.4.0`)
* **UI Component Primitives:** Radix UI (`@radix-ui/react-*`), Lucide Icons (`lucide-react@^0.453.0`), Sonner Toast (`sonner@^2.0.7`), Embla Carousel (`embla-carousel-react@^8.6.0`)
* **Database Technology:** MySQL / MariaDB (via PHP PDO in `enquire.php`)
* **Authentication System:** None active. An unused helper stub `getLoginUrl()` exists in `client/src/const.ts`.
* **External APIs & CDNs:** Google Fonts, Google Maps / Maps Proxy, Google Analytics / GTM prefetch, standard PHP `mail()` MTA.
* **Node.js Requirement:** Node.js `>= 18.0.0` (Node 20 or 22 LTS recommended)
* **Package Manager:** `npm` (Lockfile: `package-lock.json` with `npm@10.x` specification)

---

## 3. DEPENDENCIES

**Location of package manifest:** `package.json`  
**Package Manager:** `npm` (specified via `"packageManager": "npm@10.x"`)  
**Node.js Version Requirement:** Node.js 18.x or higher  
**Install Command:** `npm install` (or `npm ci` for deterministic production installs)

### Production Dependencies (`dependencies`):
* `@hookform/resolvers`: `^5.2.2`
* `@radix-ui/react-accordion`: `^1.2.12`
* `@radix-ui/react-alert-dialog`: `^1.1.15`
* `@radix-ui/react-aspect-ratio`: `^1.1.7`
* `@radix-ui/react-avatar`: `^1.1.10`
* `@radix-ui/react-checkbox`: `^1.3.3`
* `@radix-ui/react-collapsible`: `^1.1.12`
* `@radix-ui/react-context-menu`: `^2.2.16`
* `@radix-ui/react-dialog`: `^1.1.15`
* `@radix-ui/react-dropdown-menu`: `^2.1.16`
* `@radix-ui/react-hover-card`: `^1.1.15`
* `@radix-ui/react-label`: `^2.1.7`
* `@radix-ui/react-menubar`: `^1.1.16`
* `@radix-ui/react-navigation-menu`: `^1.2.14`
* `@radix-ui/react-popover`: `^1.1.15`
* `@radix-ui/react-progress`: `^1.1.7`
* `@radix-ui/react-radio-group`: `^1.3.8`
* `@radix-ui/react-scroll-area`: `^1.2.10`
* `@radix-ui/react-select`: `^2.2.6`
* `@radix-ui/react-separator`: `^1.1.7`
* `@radix-ui/react-slider`: `^1.3.6`
* `@radix-ui/react-slot`: `^1.2.3`
* `@radix-ui/react-switch`: `^1.2.6`
* `@radix-ui/react-tabs`: `^1.1.13`
* `@radix-ui/react-toggle`: `^1.1.10`
* `@radix-ui/react-toggle-group`: `^1.1.11`
* `@radix-ui/react-tooltip`: `^1.2.8`
* `axios`: `^1.12.0`
* `class-variance-authority`: `^0.7.1`
* `clsx`: `^2.1.1`
* `cmdk`: `^1.1.1`
* `embla-carousel-react`: `^8.6.0`
* `express`: `^4.21.2`
* `framer-motion`: `^12.23.22`
* `gsap`: `^3.15.0`
* `input-otp`: `^1.4.2`
* `lucide-react`: `^0.453.0`
* `nanoid`: `^5.1.5`
* `next-themes`: `^0.4.6`
* `react`: `^19.2.1`
* `react-day-picker`: `^9.11.1`
* `react-dom`: `^19.2.1`
* `react-hook-form`: `^7.64.0`
* `react-resizable-panels`: `^3.0.6`
* `recharts`: `^2.15.2`
* `sonner`: `^2.0.7`
* `streamdown`: `^1.4.0`
* `tailwind-merge`: `^3.3.1`
* `tailwindcss-animate`: `^1.0.7`
* `vaul`: `^1.1.2`
* `wouter`: `^3.3.5`
* `zod`: `^4.1.12`

### Development Dependencies (`devDependencies`):
* `@tailwindcss/typography`: `^0.5.15`
* `@tailwindcss/vite`: `^4.1.3`
* `@types/express`: `4.17.21`
* `@types/google.maps`: `^3.58.1`
* `@types/node`: `^24.7.0`
* `@types/react`: `^19.2.1`
* `@types/react-dom`: `^19.2.1`
* `@vitejs/plugin-react`: `^5.0.4`
* `add`: `^2.0.6`
* `autoprefixer`: `^10.4.20`
* `esbuild`: `^0.25.0`
* `pnpm`: `^10.15.1`
* `postcss`: `^8.4.47`
* `prettier`: `^3.6.2`
* `tailwindcss`: `^4.1.14`
* `tsx`: `^4.19.1`
* `tw-animate-css`: `^1.4.0`
* `typescript`: `5.6.3`
* `vite`: `^7.1.7`
* `vite-plugin-manus-runtime`: `^0.0.58`
* `vitest`: `^4.1.11`

---

## 4. BUILD AND RUN COMMANDS

* **a. Install dependencies:**
  ```bash
  npm install
  ```
* **b. Run locally in development:**
  ```bash
  npm run dev
  ```
  *(Starts Vite dev server on host `0.0.0.0` at port 3000)*
* **c. Build the frontend and server:**
  ```bash
  npm run build
  ```
  *(Executes `vite build` to output client bundle into `dist/public`, then bundles `server/index.ts` with `esbuild` into `dist/index.js`)*
* **d. Start the production frontend via Node server:**
  ```bash
  npm start
  ```
  *(Executes `NODE_ENV=production node dist/index.js`)*
* **e. Start the backend:**
  * **Node server:** `node dist/index.js`
  * **PHP form handler:** Served automatically by web server (Apache/Nginx) handling `dist/public/api/enquire.php`.
* **f. Run complete production application:**
  ```bash
  npm run build
  npm start
  ```

---

## 5. BACKEND / NODE.JS REQUIREMENTS

1. **The Node.js Server:**
   * **Entry point:** `server/index.ts` (compiles to `dist/index.js`)
   * **Purpose:** Express application that serves static files and client-side routing fallback (`express.static(staticPath)` and `app.get("*", ...)`).
   * **Custom API routes:** None in `server/index.ts`.
   * **Start command:** `node dist/index.js` (or `npm start`)
   * **Required Port:** Controlled via `process.env.PORT` (defaults to `3000`).
   * **Continuous execution:** Must remain running if using Node.js to serve the frontend (e.g., via PM2 or systemd).
   * **Process Manager:** Recommended `pm2 start dist/index.js --name "royal-swiss-city"`.
   * **CORS configuration:** Not needed in Node server since it only serves static assets.

2. **The Form Submission API:**
   * Handled by `client/public/api/enquire.php`.
   * When hosted on an Apache/Nginx + PHP environment, Apache serves the static files directly using `.htaccess` rules while executing `api/enquire.php` for form submissions.

---

## 6. DATABASE

* **Is a database required?** **YES.** MySQL / MariaDB database is required to store customer submissions sent through the website's booking/enquiry form.
* **Database Technology:** MySQL 5.7+ / MySQL 8.0+ / MariaDB 10.3+
* **Connection Mechanism:** PHP PDO inside `client/public/api/enquire.php`.
* **Connection Configuration Location:** Hard-coded inside `client/public/api/enquire.php` (Lines 30-33).
* **Schema Files:** `enquiries.sql` and `client/public/enquiries.sql`.
* **Table Definition:**
  ```sql
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
  ```
* **Database Setup Command on Server:**
  ```bash
  mysql -u <db_user> -p <db_name> < enquiries.sql
  ```

---

## 7. ENVIRONMENT VARIABLES / SECRETS

| Variable Name | Used In | Purpose / Description | Production vs Development |
|---|---|---|---|
| `PORT` | `server/index.ts`, `template.json` | Port for the Express server to listen on. Defaults to `3000`. | Required in Production (if running Express) |
| `NODE_ENV` | `server/index.ts`, `vite.config.ts`, `.env.example` | Node execution environment flag (`production` vs `development`). | Required in Production |
| `VITE_API_URL` | `.env.example` | Base URL for the API (referenced in example config). | Optional / Reference |
| `VITE_FRONTEND_FORGE_API_KEY` | `client/src/components/Map.tsx` | API key for Google Maps proxy. | Optional (only if Map component is rendered) |
| `VITE_FRONTEND_FORGE_API_URL` | `client/src/components/Map.tsx` | Base URL for Google Maps proxy (`https://forge.butterfly-effect.dev`). | Optional |
| `BUILT_IN_FORGE_API_KEY` | `vite.config.ts` | Server-side development storage proxy API key. | Development only (Vite dev server) |
| `BUILT_IN_FORGE_API_URL` | `vite.config.ts` | Server-side development storage proxy URL. | Development only (Vite dev server) |
| `VITE_OAUTH_PORTAL_URL` | `client/src/const.ts` | OAuth portal URL helper. | Unused in active application |
| `VITE_APP_ID` | `client/src/const.ts` | Application ID for OAuth helper. | Unused in active application |

### Database Credentials in Code:
* Located in `client/public/api/enquire.php`:
  * `$db_host = "localhost";`
  * `$db_name = "..."`
  * `$db_user = "..."`
  * `$db_pass = "..."`
  * `$admin_email = "royalswisscity@gmail.com";`
* **Migration Requirement:** Update these 4 variables inside `api/enquire.php` with the new database name, user, and password created on the destination server.

---

## 8. EXTERNAL SERVICES

1. **Google Fonts (`fonts.googleapis.com`, `fonts.gstatic.com`)**
   * **Purpose:** Loads typography fonts (*Cinzel*, *Cormorant Garamond*, *DM Sans*, *Playfair Display*).
   * **Required in Production:** Yes.
2. **Mail Delivery Service (`sendmail` / PHP `mail()`)**
   * **Purpose:** Sends notification email to `royalswisscity@gmail.com` when a lead submits the enquiry form.
   * **Required in Production:** Yes.
3. **Google Maps API Proxy (`forge.butterfly-effect.dev` / `maps.googleapis.com`)**
   * **Purpose:** Referenced in `client/src/components/Map.tsx` (template code; not mounted in live views).
   * **Required in Production:** No (unless map view is added to active pages).
4. **Social Media & External Links**
   * **Domains:** Facebook, Instagram, LinkedIn, YouTube, TikTok, X (Twitter), Habib Rafiq official site (`habibrafiq.com`).
   * **Required in Production:** Yes (static `<a>` tags).

---

## 9. DOMAIN / URL DEPENDENCIES

### 1. `royalswisscity.com`
Appears in SEO canonical tags, Open Graph meta images, Schema.org JSON-LD definitions, XML sitemaps, and breadcrumbs:
* `client/index.html`
* `client/src/config/seo.ts`
* `client/src/components/SEOHead.tsx`
* `client/src/components/Breadcrumb.tsx`
* `client/src/components/FloatingContacts.tsx`
* `client/src/pages/Home.tsx`, `Developer.tsx`, `Projects.tsx`, `FAQ.tsx`
* `client/public/sitemap.xml`, `sitemap-urdu.xml`, `sitemap.html`, `robots.txt`

### 2. `localhost` & `127.0.0.1`
* `server/index.ts`: Console log `http://localhost:${port}/`.
* `client/public/api/enquire.php`: `$db_host = "localhost";`.
* `vite.config.ts`: `allowedHosts` for local dev server.

### 3. Vercel Staging Artifact References:
* `client/index.html` (Lines 42, 43, 62): `https://royal-swiss-city-30.vercel.app/logo.png`.
* **Recommendation:** Update these to relative paths (`/logo.webp` or `https://royalswisscity.com/logo.webp`).

---

## 10. FRONTEND-BACKEND CONNECTION

```
[ User Browser ]
       │
       ▼ (User Submits Lead Form on /enquire)
[ React Client: Enquire.tsx ]
       │
       ▼ HTTP POST JSON (fetch("/api/enquire.php"))
[ Web Server (Apache/Nginx) ]
       │
       ▼ (Executes PHP Handler)
[ api/enquire.php ]
       ├──▶ PDO INSERT ──▶ [ MySQL Database: 'enquiries' table ]
       └──▶ mail() ──────▶ [ Email MTA ──▶ royalswisscity@gmail.com ]
       │
       ▼ JSON Response { success: true, message: "...", db_saved: true }
[ React Client UI Displays Success Confirmation Toast/Box ]
```

* **API Endpoint:** `/api/enquire.php`
* **Configuration Location:** Configured relative to origin inside `client/src/pages/Enquire.tsx`.

---

## 11. DEPLOYMENT REQUIREMENTS

### MUST HAVE:
1. **Web Server Support for SPA Rewriting:** Apache with `mod_rewrite` enabled or Nginx with `try_files $uri $uri/ /index.html;`.
2. **PHP 7.4+ or 8.x Runtime with `pdo_mysql` Extension:** Required to execute `/api/enquire.php`.
3. **MySQL 5.7+ or MariaDB 10.3+ Database Server:** Required to store records in the `enquiries` table.
4. **Outbound Mail Delivery (`sendmail` or local SMTP):** Required for PHP `mail()` function.
5. **Node.js 18+ (Build/Runtime):** Required on server if compiling via SSH terminal or running Node Express.

### NICE TO HAVE:
1. **SSH / Terminal Access:** For direct CLI management and builds.
2. **PM2 or cPanel Node.js Application Manager:** If running Node.js Express in daemon mode.
3. **SSL/TLS Certificate (Let's Encrypt / AutoSSL):** For HTTPS security headers.
4. **Gzip / Brotli Compression (`mod_deflate`):** Speeds up media and JS asset delivery.
5. **phpMyAdmin:** For database inspection and lead export.

---

## 12. CURRENT STATIC-HOSTING PROBLEM

1. **Form Submissions Break (`/api/enquire.php`):** Pure static hosts cannot execute PHP or interact with MySQL. Submitting the enquiry form returns 404 or downloads raw PHP.
2. **Direct Route 404 Errors on Refresh (SPA Routing):** Navigating directly to `/projects`, `/developer`, `/the-city`, `/faq`, or `/enquire` without rewrite rules returns a 404 error.

---

## 13. PRODUCTION DEPLOYMENT PLAN

### Step 1: Prepare Database on New Host
1. Create a new MySQL Database (e.g. `royalsw2_RSC_db`).
2. Create a MySQL User with full privileges and set a strong password.
3. Import `enquiries.sql` into the new database.

### Step 2: Configure Backend Connection
1. In `client/public/api/enquire.php`, update `$db_name`, `$db_user`, and `$db_pass`.

### Step 3: Build the Production Application
```bash
npm install
npm run build
```

### Step 4: Deploy Files to Web Root
* **Apache / cPanel Shared Hosting (Standard & Recommended):** Deploy all contents of `dist/public/` (including `.htaccess`) into `public_html/`.
* **Node.js Application Manager / PM2 Mode:** Upload `package.json`, `dist/`, run `npm install --omit=dev`, and start with `pm2 start dist/index.js --name "royal-swiss-city"`.

### Step 5: Test & Verify
1. Verify subpage routing and direct URL refresh.
2. Submit a test enquiry form and confirm database entry and email notification.

---

## 14. FILES TO UPLOAD

### Required Production Files (Upload to `public_html` or document root):
* `dist/public/index.html`
* `dist/public/.htaccess`
* `dist/public/assets/` (Compiled JS and CSS bundles)
* `dist/public/api/enquire.php`
* `dist/public/*.webp`, `dist/public/*.jpg`, `dist/public/*.png`, `dist/public/*.svg`
* `dist/public/*.mp4` (Videos)
* `dist/public/sitemap.xml`, `sitemap-urdu.xml`, `sitemap.html`
* `dist/public/robots.txt` & `llms.txt`

### Files that should NOT be uploaded:
* `node_modules/`
* `.git/`
* `.manus-logs/`
* `client/src/`
* `server/`
* `attached_assets/`
* `*.zip` archives in root

---

## 15. SERVER COMMANDS

```bash
# 1. Navigate to project root
cd /path/to/royal-swiss-city

# 2. Install dependencies
npm ci

# 3. Import database schema into MySQL
mysql -u <db_user> -p <db_name> < enquiries.sql

# 4. Compile frontend and backend bundles
npm run build

# 5. (Option A: If using Node.js Express process manager)
npm install --omit=dev
pm2 start dist/index.js --name "royal-swiss-city"
pm2 save
pm2 startup

# 6. (Option B: If using Apache/cPanel public_html)
cp -r dist/public/* /home/<username>/public_html/
cp dist/public/.htaccess /home/<username>/public_html/
chmod 644 /home/<username>/public_html/.htaccess
chmod 644 /home/<username>/public_html/api/enquire.php
```

---

## 16. FINAL DEPLOYMENT CHECKLIST

```
[ ] 1. Database & Schema
    [ ] MySQL database created on destination server
    [ ] MySQL user created with full read/write privileges
    [ ] enquiries.sql imported and 'enquiries' table verified
    [ ] Database credentials updated in api/enquire.php ($db_name, $db_user, $db_pass)

[ ] 2. Web Server Configuration
    [ ] Apache mod_rewrite / mod_deflate / mod_headers enabled
    [ ] .htaccess file present in document root with SPA rewrite rules
    [ ] PHP 7.4+ or 8.x configured with pdo_mysql enabled
    [ ] PHP mail() function verified and tested

[ ] 3. Build & Static Assets
    [ ] npm run build executed with zero errors
    [ ] All image files (.webp, .jpg, .svg) verified present in build output
    [ ] All video files (.mp4) present and confirmed streaming
    [ ] robots.txt and sitemap.xml verified at site root

[ ] 4. Functional Testing
    [ ] Direct URL navigation works for /developer, /the-city, /projects, /faq, /enquire
    [ ] Enquiry form test submission completed
    [ ] Database table 'enquiries' inspected to verify test row creation
    [ ] Notification email received in royalswisscity@gmail.com

[ ] 5. Security & SSL
    [ ] SSL/TLS certificate installed and HTTPS forced
    [ ] Permissions set to 644 for files and 755 for directories
```

---

## MIGRATION SUMMARY

1. **Current architecture:** Client-Side Single Page Application (React 19 + TypeScript + Vite + Tailwind v4 + GSAP + Wouter) with an Express static server wrapper (`server/index.ts`) and a standalone PHP/PDO MySQL enquiry processing API (`client/public/api/enquire.php`).
2. **Required hosting features:** Web server with SPA routing / URL rewrite support (`mod_rewrite` / `.htaccess`), PHP 7.4+ with `pdo_mysql`, MySQL / MariaDB database, and outgoing email support (`mail()`).
3. **Node.js requirement:** Required during build time (`npm run build`). In production, Node.js is optional (Express only serves static assets), whereas PHP is mandatory for the lead capture form.
4. **Database requirement:** MySQL / MariaDB database is required to store user enquiries via the `enquiries` table defined in `enquiries.sql`.
5. **Environment variables required:** `PORT` and `NODE_ENV=production` (for Node runtime). Database credentials are configured directly inside `client/public/api/enquire.php`.
6. **Production start command:** `npm start` (or `pm2 start dist/index.js`) if running Node.js Express server; or direct web server document root serving for Apache/Nginx.
7. **Build command:** `npm run build`
8. **Main deployment risks:**
   * Moving to a Node-only container without PHP support will break form submissions (`/api/enquire.php`).
   * Missing `.htaccess` on Apache will cause 404 errors when reloading sub-routes (`/projects`, `/developer`, etc.).
   * Omitting database credentials update in `enquire.php` will prevent new lead data from saving.
9. **Anything that must be changed before migration:**
   * Update `$db_name`, `$db_user`, and `$db_pass` in `client/public/api/enquire.php` to match the new server database.
   * Update external Vercel staging logo URLs in `client/index.html` to local relative paths.
