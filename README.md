# Multi Search Portal 

A robust, premium single-page web search dashboard styled with a dark Netflix aesthetic. It aggregates search queries across over **25+ search engines** (categorized under Web Search, AI & Chat, and Privacy Alternatives), offers full customization options, voice search, and a customizable clock widget.

## 🎨 Design Features
- **Netflix Dark Aesthetic:** Uses a dark background with a custom neon red spotlight glow blob (`--accent-color: #e50914`).
- **Responsive Layout:** Beautiful fluid grid structure with media queries to support desktop, tablet, and mobile displays.
- **Micro-interactions:** Custom transitions, scaling effects, and check-marked toggles for settings.

## 🚀 Key Features

### 1. Multi-Engine Search Selector
Queries can be searched across **28 search engines** grouped by task:
*   **Web Search:** Google, Bing, Yahoo, Yandex, Sogou, 360 Search, Ask.com, AOL, Baidu.
*   **AI & Chat:** Google AI (Search Overview), DuckDuck AI, Perplexity, Grok, DeepSeek, Gemini, ChatGPT, Copilot, MetaSo, You.com.
*   **Privacy & Alternatives:** DuckDuckGo, Brave Search, Ecosia, Mojeek, PrivacyWall, Swisscows, Qwant, Karma Search, Wikipedia.
*   *Preference persistence:* Remembers your last used search engine in browser LocalStorage.

### 2. Voice Search
- Uses the browser's native Web Speech API (`webkitSpeechRecognition`).
- Features a microphone button with a glowing red active-pulse animation when recording.

### 3. Customizable Clock Widget
- Offers both **Digital** and **Analog** clock view modes.
- Supports **12-hour** and **24-hour** digital formats.
- Supports showing/hiding seconds.
- Displays a personalized greeting (Morning/Afternoon/Evening) based on local browser time.

### 4. Quick Access Bookmarks
- Displays a dynamic grid of popular web portals including:
  - Google Account, Microsoft Account, Gmail, Outlook, Yahoo Mail
  - Discord, Telegram, WhatsApp, Instagram, Facebook, X (Twitter), Reddit, LinkedIn, Pinterest
  - YouTube, Spotify
  - ChatGPT, Gemini, Claude
  - Wikipedia, VK, Yandex
- Auto-loads site favicons from local folders.

### 5. Search History Panel
- Tracks search queries (up to 15 records) stored locally in browser storage.
- Click tags to quickly search again, delete individual queries, or clear the history log.

### 6. User Personalization
- **Open in New Tab:** Toggle option to open search results in a new tab or the active tab.
- **Change Profile Name:** Customize your header profile name which updates the greeting.
- **Change Background:** Personalize the dashboard background using standard CSS colors, gradients, or direct image URLs.

---

## 🛠️ Usage Instructions

1. **Deploying the File:** Put the `index.html` in your web server directory along with any assets under the `assets/` subdirectory.
2. **Perform Searches:**
   - Click on the left-side engine logo selector.
   - Choose your preferred search engine.
   - Input your query in the textbox and click **Search** or hit **Enter**.
3. **Configure Options:** Click on the profile avatar in the top right to toggle display options (formats, clocks, backgrounds, naming).

## 📄 File Details
*   **File Size:** ~56 KB
*   **Technologies:** HTML5, CSS3, Vanilla JS, Web Speech API, LocalStorage API
