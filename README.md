# NEWORA FASHION - Official Website

> **High-converting, ultra-fast, mobile-first website for "Newora Fashion"**  
> Specially crafted for social media apparel sellers with direct Facebook Live Feed integration, instant Messenger & WhatsApp ordering, and fast islandwide courier delivery. Ready for 100% free hosting on **GitHub Pages**.

---

## 🌟 Key Features Built-In

1. **Prominent Branding**:
   - Giant luxury editorial masthead displaying **NEWORA** right at the top as requested.
2. **Direct Facebook Page Live Feed (Timeline & Messages)**:
   - Connected directly to your official Facebook Page (`https://www.facebook.com/profile.php?id=61596531761510`).
   - **No need to update the website manually!** Whenever you post new stock updates, photos, or prices on your Facebook Page, they immediately appear on your website in real time.
   - Customers can browse posts and even send/view messages directly through the Facebook embed or Messenger.
3. **Speed Courier & Home Delivery Spotlight**:
   - Highlighted *"Redi Gedaratama Courier Karanawa"* (Fast Home Delivery) and 24-48h Speed Courier across all banners, trust pills, process steps, and FAQs.
4. **100% Premium Fabric & Quality Material Focus**:
   - Dedicated Quality Guarantee section highlighting handpicked linen, combed cotton, and durable stitch finishes.
5. **Direct Social Media / WhatsApp & Messenger Commerce**:
   - 1-Click buttons to chat on Facebook Messenger, visit the FB Page, or order via WhatsApp hotline.
   - Floating WhatsApp contact pill for immediate live inquiries.
6. **Ultra-Fast & Zero-Bloat Performance**:
   - Pure Semantic HTML5, CSS3, and Vanilla JavaScript.
   - **No heavy animation libraries, no jQuery, no framework lag** — loads in milliseconds.
7. **Ultimate SEO for `"newora fashion"`**:
   - Semantic heading hierarchy (`H1`, `H2`, `H3`).
   - Rich Meta Tags, OpenGraph & Twitter Card tags.
   - **Full Schema.org JSON-LD Structured Data** (`ClothingStore`, `WebSite`, and `FAQPage` rich snippets).
   - Built-in `robots.txt` and `sitemap.xml`.

---

## 📁 File Structure

```text
Newora/
│
├── index.html          # Main HTML structure with FB live feed & all SEO tags
├── robots.txt          # Google & Bing crawler instructions
├── sitemap.xml         # XML Sitemap for Google Search Console
├── README.md           # Documentation & GitHub Pages setup guide
│
├── css/
│   └── style.css       # Clean, modern, responsive CSS styling
│
└── js/
    └── app.js          # Fast JS logic for FB/WA links, mobile menu & FAQ
```

---

## 🚀 How to Host on GitHub Pages (Step-by-Step)

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com).
2. Click **New Repository**.
3. Name your repository (e.g., `newora` or `newora-fashion`).
4. Keep it **Public** and click **Create repository**.

### Step 2: Upload Files
In your terminal / PowerShell in this folder (`d:\Documents\Newora`), run:

```bash
git init
git add .
git commit -m "Update Newora Fashion with Live Facebook feed"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
git push -u origin main
```

*(Alternatively, you can drag and drop all files directly into the GitHub web interface).*

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (top right tab).
3. In the left sidebar, click **Pages** (under the "Code and automation" section).
4. Under **Build and deployment** > **Branch**:
   - Select `main`
   - Folder: `/ (root)`
   - Click **Save**.
5. Wait 1-2 minutes. GitHub will provide your live URL:  
   👉 `https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>/`

---

## ⚙️ How to Customize Your Contact Details

### 1. Update Your WhatsApp Number
Open [js/app.js](file:///d:/Documents/Newora/js/app.js):
```javascript
const NEWORA_CONFIG = {
  brandName: "Newora",
  brandFullName: "Newora Fashion",
  facebookPageUrl: "https://www.facebook.com/profile.php?id=61596531761510",
  facebookPageId: "61596531761510",
  messengerUrl: "https://m.me/61596531761510",
  whatsappNumber: "94770000000", // Replace with your real WhatsApp number
  instagramHandle: "neworafashion"
};
```

---

## 🔍 How to Rank #1 on Google for `"newora fashion"`

1. **Submit to Google Search Console**:
   - Go to [Google Search Console](https://search.google.com/search-console).
   - Add your website URL (`https://<username>.github.io/newora/`).
   - Go to **Sitemaps** on the left menu and submit: `sitemap.xml`.
   - Click **URL Inspection** -> Enter your URL -> Click **Request Indexing**.

2. **Add Your Website Link to Your Facebook Page**:
   - Go to your Facebook Page `https://www.facebook.com/profile.php?id=61596531761510`
   - In the **About / Website** section, add your GitHub Pages website link.
   - This backlink gives your website immediate authority on Google.
