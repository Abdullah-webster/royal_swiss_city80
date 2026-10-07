import { execSync, spawnSync } from 'child_process';

console.log('=== Fetching live homepage HTML ===');
const html = execSync('curl.exe -s -L https://royalswisscity.com/', { encoding: 'utf8' });

// Find all script tags, css, images, videos
const assets = [];
const scriptMatches = html.matchAll(/src=["']([^"']+)["']/g);
for (const m of scriptMatches) {
  assets.push(m[1]);
}
const linkMatches = html.matchAll(/href=["']([^"']+)["']/g);
for (const m of linkMatches) {
  if (m[1].endsWith('.css') || m[1].endsWith('.png') || m[1].endsWith('.webp') || m[1].endsWith('.jpg') || m[1].includes('fonts.googleapis.com')) {
    assets.push(m[1]);
  }
}

// Check JS bundle to see what images/videos it imports
console.log('Assets in HTML:', assets);

// Also test the video files directly on the live server
const toTest = [
  'https://royalswisscity.com/',
  'https://royalswisscity.com/hero-mobile-bg.mp4',
  'https://royalswisscity.com/home_desktop_bg.mp4',
  'https://royalswisscity.com/desktop_city_aerial.webp',
  'https://royalswisscity.com/city-aerial.jpg',
  'https://royalswisscity.com/Map_thecity.gif',
  'https://royalswisscity.com/Map_thecity-mobile.gif'
];

// Add assets found in HTML
for (const a of assets) {
  if (a.startsWith('/')) {
    toTest.push(`https://royalswisscity.com${a}`);
  } else if (a.startsWith('http')) {
    toTest.push(a);
  }
}

const uniqueUrls = Array.from(new Set(toTest));

console.log('\n=== Testing Speed and Headers for all Live URLs ===');
for (const u of uniqueUrls) {
  try {
    const res = execSync(`curl.exe -o NUL -s -w "HTTP: %{http_code} | Size: %{size_download} B | TTFB: %{time_starttransfer}s | Total Time: %{time_total}s | Speed: %{speed_download} B/s" "${u}"`, { encoding: 'utf8' });
    console.log(`${u.padEnd(55)} -> ${res.trim()}`);
  } catch (err) {
    console.log(`${u.padEnd(55)} -> ERROR: ${err.message}`);
  }
}
