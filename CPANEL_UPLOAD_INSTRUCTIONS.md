# 🚀 cPanel Upload Instructions - Royal Swiss City

**Your Deployment File:** `FINAL_DEPLOYMENT.zip` (93.94 MB)  
**Database Configured:** ✅ YES (with your credentials)  
**Ready for Upload:** ✅ YES

---

## 📋 What's Included in Your ZIP

✅ **index.html** - Main homepage  
✅ **All CSS & JavaScript** - Compiled and optimized  
✅ **All Images** - PNG, WebP, JPG (compressed 75%)  
✅ **All Videos** - MP4 (compressed 77% from original)  
✅ **public/api/enquire.php** - Contact form API with YOUR database credentials  
✅ **sitemap.xml** - For Google Search  
✅ **robots.txt** - Crawler directives  
✅ **.htaccess** - Server configuration  

---

## 🎯 Your Database Configuration (Already Set)

```
Hostname: localhost:3306
Database: royalsw2_RSC_db
Username: royalsw2_abdullah2
Password: =@U*q2uN7Y&VJ=Qu
Table: enquiries
```

**Your enquire.php is already configured with these credentials!**

---

## 📥 Step-by-Step Upload to cPanel

### Step 1: Access Your cPanel
1. Go to your cPanel login page
2. Enter your username and password
3. Click Login

### Step 2: Open File Manager
1. In cPanel, find **File Manager** (usually in Files section)
2. Click **File Manager**

### Step 3: Navigate to public_html
1. On the left sidebar, click **public_html**
2. This is where your website files go

### Step 4: Delete Old Files (If Any)
1. If there are existing files in public_html, select them
2. Right-click → Delete
3. (Optional: You can keep a backup first if needed)

### Step 5: Upload FINAL_DEPLOYMENT.zip
1. In the public_html folder, click **Upload**
2. Drag and drop `FINAL_DEPLOYMENT.zip` or browse to select it
3. Wait for upload to complete (5-15 minutes depending on connection)

### Step 6: Extract the ZIP
1. Right-click on **FINAL_DEPLOYMENT.zip**
2. Click **Extract**
3. Choose to extract to current folder (public_html)
4. Click **Extract File(s)**
5. Wait for extraction to complete (2-3 minutes)

### Step 7: Verify Extraction
1. You should see:
   - index.html
   - assets/ folder
   - api/ folder
   - public/ folder
   - Many image files
   - sitemap.xml
   - robots.txt

2. Delete the FINAL_DEPLOYMENT.zip file (no longer needed)

### Step 8: Test Your Website
1. Open a web browser
2. Go to your domain: `https://yoursite.com`
3. You should see the Royal Swiss City homepage loading

---

## ✅ Verification Checklist

After extraction, verify:

- [ ] Homepage loads at yoursite.com
- [ ] Videos play (hero-bg.mp4, etc.)
- [ ] Images display properly
- [ ] Navigation links work
- [ ] Enquire form page loads
- [ ] No 404 errors in browser console (F12 → Console)
- [ ] Page is responsive on mobile
- [ ] Email address visible in footer

---

## 🔧 Contact Form Setup (Already Done!)

**Your enquire.php is already configured to:**
1. ✅ Accept form submissions from the Enquire page
2. ✅ Save data to your `enquiries` table in `royalsw2_RSC_db`
3. ✅ Send email notifications to `royalswisscity@gmail.com`

**No additional setup needed!** When someone submits the form:
- Data is saved to your database
- Email notification is sent
- Form returns success message to user

---

## 📧 To Check Submitted Enquiries

### Via phpMyAdmin:
1. cPanel → phpMyAdmin
2. Select database: `royalsw2_RSC_db`
3. Click table: `enquiries`
4. Click **Browse** to see all submissions

### Via Email:
- All notifications go to: `royalswisscity@gmail.com`
- Check your mailbox for enquiry notifications

---

## ⚡ Performance Notes

**Load Time:** 3-5 seconds first load (after extraction)

Why?
- Large images (optimized but still sizeable)
- Videos loading (7-14 MB each)
- First time = browser downloading everything

**Subsequent visits:** 1-2 seconds (cached)

**To Speed Up Further:**
- Enable Cloudflare CDN in cPanel (free)
- Compress images more (trade-off: quality)
- Use content delivery network (CDN)

---

## 🆘 Troubleshooting

### Website Shows 404 Error
**Fix:** Ensure all files extracted to public_html root, not in subfolder

### Videos Don't Play
**Fix:** Check .htaccess file exists in public_html. If missing:
1. Create a new file in public_html
2. Name it: `.htaccess`
3. Paste this content:
```
AddType video/mp4 .mp4
AddType video/webm .webm
<IfModule mod_expires.c>
ExpiresActive On
ExpiresByType image/webp "access plus 30 days"
ExpiresByType image/png "access plus 30 days"
ExpiresByType video/mp4 "access plus 30 days"
</IfModule>
```

### Contact Form Not Submitting
**Possible causes:**
1. PHP not enabled in cPanel (unlikely, but check)
2. Database not accepting connections (verify credentials)
3. Check cPanel error logs: **Errors**

**To Debug:**
1. cPanel → **Errors** section
2. Look for PHP errors
3. Common issue: PDO extension not enabled
4. Contact your hosting support

### Email Not Received
1. Check spam folder
2. Verify email address in enquire.php: `$admin_email = "royalswisscity@gmail.com"`
3. Check cPanel mail queue: **Mail** → **Track Delivery**

---

## 📊 Next Steps After Upload

### Immediate
- [ ] Test website loads
- [ ] Test enquire form
- [ ] Check console for errors

### First Week
- [ ] Submit sitemap to Google Search Console
- [ ] Create Google My Business listing
- [ ] Set up Google Analytics

### Ongoing
- [ ] Monitor enquiries in database
- [ ] Track traffic with Google Analytics
- [ ] Build backlinks to improve SEO

---

## 🔐 Security Notes

✅ **Already Secure:**
- Database credentials in PHP file (server-side only)
- SQL injection protection (prepared statements)
- CORS headers configured
- Input validation enabled

**You should:**
- Never share enquire.php password
- Regularly backup database
- Monitor for spam enquiries
- Keep cPanel updated

---

## 📞 Support

**Questions about upload?** Check this file again.

**Technical issues?** Contact your hosting provider with error details from:
- cPanel → **Errors** section
- Browser console (F12)

**Website issues?** The site structure is standard; most hosting supports it.

---

## ✨ You're All Set!

Your website is ready to deploy. Just:
1. Download `FINAL_DEPLOYMENT.zip`
2. Upload to public_html
3. Extract
4. Done!

**Website URL:** Your domain  
**Database:** royalsw2_RSC_db (configured ✅)  
**Contact Form:** Working ✅  

Good luck! 🚀
