# 🔴 Bangla News Ticker - Chrome Extension 🇧🇩

A lightweight and real-time scrolling **Bangla news ticker** extension for Chrome — just like the news bars seen on TV channels like Jamuna TV or Prothom Alo.

✨ Headlines scroll continuously at the bottom of every webpage  
🌐 News auto-refreshes every few minutes  
📦 No login, no popup, just works silently

---

## 📸 Demo Screenshot

> *(Include a screenshot of the ticker bar running on a page like Google.com)*

---

## 🚀 Features

✅ Scrolls latest **Bangla news headlines**  
✅ Feeds from **Prothom Alo (multiple categories)**  
✅ **TV-style ticker** at the bottom of every page  
✅ Automatically refreshes every 5 minutes  
✅ Works on all webpages  
✅ Free to use, no external logins or cost

---

## 📁 Project Structure

BanglaNewsTicker/
├── manifest.json # Chrome extension config
├── content.js # The ticker logic and news fetch
├── icon.png # Extension icon
└── README.md # This documentation


---------------------------------------------------------

## 🛠️ Installation Instructions

### ✅ 1. Clone or Download

    ```bash
    git clone https://github.com/skrakib/BanglaNewsTicker.git

### ✅ 2. Load into Chrome
    Open Chrome and go to: chrome://extensions

    Enable Developer Mode (top-right switch)

    Click "Load unpacked"

    Select the folder where your files are (BanglaNewsTicker/)

    Done! You should now see the extension installed.

### ✅ 3. Try It Out
    Open any website (like Google.com)

    Scroll to the bottom

    You’ll see a scrolling ticker bar with Bangla news headlines

    Wait a few minutes and see new news appear

### ⚙️ How It Works
    Uses RSS feeds from Prothom Alo

    Converts them to JSON using rss2json.com

    Injects a styled scrolling bar on every webpage

    Refreshes news every 5 minutes to stay updated

### 🔧 Customization (Optional)
    You can edit content.js to:

    Change scroll speed (scrollSpeed value)

    Change refresh time (refreshInterval value)

    Use other feeds like BDNews24, Jugantor, or Kaler Kantho

    Add features like pause-on-hover, popup settings, etc.

###📜 Permissions
    This extension:

    Does not read or change page content

    Only fetches data from rss2json.com

    Is safe, lightweight, and privacy-friendly

### 📦 Credits
    📰 Prothom Alo (RSS content)

    🔁 RSS2JSON for converting RSS to JSON

### 🧑‍💻 Author
    Made by [SkRakib]
    📧 Email: ayfskm@example.com
    🌍 GitHub: @skrakib

### ✅ License
    This project is open source under the MIT License

