import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';
import { createWriteStream } from 'fs';

const searchEngines = [
    { url: 'https://www.google.com/search?q=' },
    { url: 'https://www.bing.com/search?q=' },
    { url: 'https://search.yahoo.com/search?p=' },
    { url: 'https://yandex.com/search/?text=' },
    { url: 'https://www.sogou.com/web?query=' },
    { url: 'https://www.so.com/s?q=' },
    { url: 'https://www.ask.com/web?q=' },
    { url: 'https://search.aol.com/aol/search?q=' },
    { url: 'https://www.baidu.com/s?wd=' },
    { url: 'https://www.google.com/search?udm=50&q=' },
    { url: 'https://duckduckgo.com/?ia=chat&q=' },
    { url: 'https://www.perplexity.ai/search?q=' },
    { url: 'https://grok.com/search?q=' },
    { url: 'https://chat.deepseek.com/search?q=' },
    { url: 'https://gemini.google.com/app?q=' },
    { url: 'https://chat.openai.com/?q=' },
    { url: 'https://copilot.microsoft.com/?q=' },
    { url: 'https://metaso.cn/?q=' },
    { url: 'https://you.com/search?q=' },
    { url: 'https://duckduckgo.com/?q=' },
    { url: 'https://search.brave.com/search?q=' },
    { url: 'https://www.ecosia.org/search?q=' },
    { url: 'https://www.mojeek.com/search?q=' },
    { url: 'https://www.privacywall.org/search/secure/?q=' },
    { url: 'https://swisscows.com/web?query=' },
    { url: 'https://www.qwant.com/?q=' },
    { url: 'https://karmanow.com/search?q=' },
    { url: 'https://fsoufsou.com/search?q=' },
    { url: 'https://en.wikipedia.org/wiki/Special:Search?search=' }
];

const quickAccessSites = [
    { url: 'https://myaccount.google.com' },
    { url: 'https://account.microsoft.com/' },
    { url: 'https://mail.google.com/mail/u/0/#all' },
    { url: 'https://outlook.live.com/mail/0/' },
    { url: 'https://in.mail.yahoo.com/' },
    { url: 'https://discord.com/channels/@me' },
    { url: 'https://www.instagram.com/' },
    { url: 'https://www.facebook.com/' },
    { url: 'https://web.whatsapp.com/' },
    { url: 'https://web.telegram.org/' },
    { url: 'https://youtube.com/' },
    { url: 'https://github.com/' },
    { url: 'https://x.com/' },
    { url: 'https://www.linkedin.com/' },
    { url: 'https://www.reddit.com/' },
    { url: 'https://in.pinterest.com/' },
    { url: 'https://open.spotify.com/' },
    { url: 'https://www.quora.com/' },
    { url: 'https://chatgpt.com/' },
    { url: 'http://claude.ai/' },
    { url: 'https://gemini.google.com/' },
    { url: 'https://www.wikipedia.org/' },
    { url: 'https://yandex.com/' },
    { url: 'https://vk.com/' },
    { url: 'https://google.com/' } // Fallback image needed
];

function getDomainFromUrl(url) {
    try {
        return new URL(url).hostname;
    } catch(e) {
        return 'google.com';
    }
}

const domains = new Set();
[...searchEngines, ...quickAccessSites].forEach(site => {
    domains.add(getDomainFromUrl(site.url));
});

console.log(`Found ${domains.size} unique domains.`);

const assetsDir = path.join(process.cwd(), 'assets');
if (!fs.existsSync(assetsDir)) {
    fs.mkdirSync(assetsDir);
}

async function downloadFavicon(domain) {
    const url = `https://www.google.com/s2/favicons?sz=64&domain=${domain}`;
    const dest = path.join(assetsDir, `${domain}.png`);
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const fileStream = createWriteStream(dest);
    await pipeline(res.body, fileStream);
}

async function run() {
    for (const domain of domains) {
        try {
            console.log(`Downloading favicon for ${domain}...`);
            await downloadFavicon(domain);
        } catch (e) {
            console.error(`Error downloading for ${domain}: ${e.message}`);
        }
    }
    console.log('Done!');
}

run();
