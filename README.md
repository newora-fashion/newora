# NEWORA FASHION - Official Website

> **High-converting, ultra-fast, mobile-first website for "Newora Fashion"**  
> Specially crafted for social-media-based apparel commerce with instant WhatsApp ordering and express islandwide courier delivery (*Redi Gedaratama Delivery*). Ready for 100% free hosting on **GitHub Pages**.

---

## 🌟 Key Features Built-In

1. **Prominent Luxury Masthead**:
   - Giant editorial title displaying **NEWORA** prominently right at the very top.
2. **Speed Courier & Home Delivery Spotlight**:
   - Express 24–48h islandwide courier delivery directly to the customer's home with Cash on Delivery (COD) and real-time courier tracking.
3. **100% Premium Fabric & Material Guarantee**:
   - Dedicated Quality Guarantee section highlighting handpicked linen, combed cotton, and durable stitch inspections.
4. **Curated Signature Collections Showcase**:
   - Highlights Newora's signature style pillars (Breathable Linen, Modern Coordinates, Flowing Crepes & Flares, Smart Casual).
5. **Standard Sri Lankan Size Guide**:
   - Complete UK & Sri Lankan sizing reference table (S, M, L, XL, XXL) with bust, waist, hips, and fit-confidence tips.
6. **Direct Social Media & WhatsApp Commerce**:
   - 1-Click WhatsApp order buttons linking to hotline **072243455** with pre-filled short inquiry message: `can I get more informations about this!`.
   - Direct connection to official Facebook Page (`https://www.facebook.com/profile.php?id=61596531761510`) and Instagram.
   - Floating WhatsApp button for immediate mobile ordering.
7. **Ultra-Fast Performance**:
   - Pure Semantic HTML5, CSS3, and Vanilla JavaScript. Zero heavy animations, zero bloated frameworks — loads in milliseconds.
8. **Ultimate SEO for "Newora Fashion"**:
   - Full Schema.org JSON-LD Structured Data (`ClothingStore`, `WebSite`, `FAQPage` rich snippets).
   - Complete Open Graph, Twitter Cards, `robots.txt`, and `sitemap.xml` configured for instant Google search indexing.

---

## 📁 File Structure

```text
Newora/
│
├── index.html          # Main HTML structure with complete SEO & schema
├── robots.txt          # Google & Bing crawler instructions
├── sitemap.xml         # XML Sitemap for Google Search Console
├── README.md           # Documentation & setup guide
│
├── css/
│   └── style.css       # Clean, modern, responsive CSS styling
│
└── js/
    └── app.js          # Fast JS logic for WA hotline, mobile menu & FAQ
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
git commit -m "Complete Newora Fashion website"
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

### Update Your WhatsApp Hotline
Open [js/app.js](file:///d:/Documents/Newora/js/app.js):
```javascript
const NEWORA_CONFIG = {
  brandName: "Newora",
  brandFullName: "Newora Fashion",
  facebookPageUrl: "https://www.facebook.com/profile.php?id=61596531761510",
  facebookPageId: "61596531761510",
  messengerUrl: "https://m.me/61596531761510",
  whatsappNumber: "9472243455", // WhatsApp hotline (072243455)
  whatsappDisplay: "072243455",
  whatsappMessage: "can I get more informations about this!",
  instagramHandle: "neworafashion"
};
```

---

## 🔍 How to Rank #1 on Google for "newora fashion"

1. **Submit to Google Search Console**:
   - Go to [Google Search Console](https://search.google.com/search-console).
   - Add your website URL (`https://<username>.github.io/newora/`).
   - Go to **Sitemaps** on the left menu and submit: `sitemap.xml`.
   - Click **URL Inspection** -> Enter your URL -> Click **Request Indexing**.

2. **Add Your Website Link to Your Facebook Page**:
   - Go to your Facebook Page: `https://www.facebook.com/profile.php?id=61596531761510`
   - In the **About / Website** section, add your GitHub Pages website link.
   - This backlink gives your website immediate authority on Google.
