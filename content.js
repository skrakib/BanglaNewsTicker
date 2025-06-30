console.log("✅ Bangla News Ticker started");

const rssFeeds = [
  "https://api.rss2json.com/v1/api.json?rss_url=https://www.prothomalo.com/feed",
  "https://api.rss2json.com/v1/api.json?rss_url=https://www.prothomalo.com/bangladesh/feed",
  "https://api.rss2json.com/v1/api.json?rss_url=https://www.prothomalo.com/international/feed"
];

const scrollSpeed = 100; // Lower is faster
const refreshInterval = 10 * 60 * 1000; // 5 minutes

if (!document.getElementById("bangla-news-bar")) {
  const style = document.createElement("style");
  style.textContent = `
    #bangla-news-bar {
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 35px;
      background-color: black;
      color: white;
      font-size: 18px;
      font-family: 'Noto Sans Bengali', Arial, sans-serif;
      z-index: 9999999;
      overflow: hidden;
      border-top: 3px solid red;
    }

    #bangla-news-text {
      display: inline-block;
      padding-left: 100%;
      white-space: nowrap;
      animation: scroll-left linear infinite;
    }

    @keyframes scroll-left {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-100%); }
    }
  `;
  document.head.appendChild(style);

  const tickerBar = document.createElement("div");
  tickerBar.id = "bangla-news-bar";

  const newsText = document.createElement("div");
  newsText.id = "bangla-news-text";
  newsText.textContent = "লোড হচ্ছে...";

  tickerBar.appendChild(newsText);
  document.body.appendChild(tickerBar);

  function updateHeadlines() {
    Promise.all(rssFeeds.map(url => fetch(url).then(res => res.json())))
      .then(results => {
        let headlines = [];

        results.forEach(feed => {
          if (feed.status === "ok" && feed.items.length > 0) {
            const titles = feed.items.map(item => item.title.trim());
            headlines.push(...titles);
          }
        });

        const uniqueHeadlines = [...new Set(headlines)];

        if (uniqueHeadlines.length > 0) {
          const joined = uniqueHeadlines.join(" 🔴 ");
          newsText.textContent = "🔴 " + joined + " 🔴";

          // Recalculate scroll time
          setTimeout(() => {
            const textWidth = newsText.scrollWidth;
            const barWidth = tickerBar.offsetWidth;
            const distance = textWidth + barWidth;
            const duration = distance / scrollSpeed;
            newsText.style.animationDuration = `${duration}s`;
          }, 300);
        } else {
          newsText.textContent = "⚠️ সংবাদ পাওয়া যায়নি।";
        }
      })
      .catch(err => {
        newsText.textContent = "⚠️ সংযোগ ব্যর্থ হয়েছে।";
        console.error("News fetch error:", err);
      });
  }

  // Initial load
  updateHeadlines();

  // Auto refresh every X minutes
  setInterval(updateHeadlines, refreshInterval);
}
