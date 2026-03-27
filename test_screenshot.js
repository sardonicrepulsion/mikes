const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Get container IP
  const containerIP = '127.0.0.1'; 
  const containerPort = 80;
  
  try {
    await page.goto(`http://${containerIP}:${containerPort}/`, { waitUntil: 'networkidle' });
    await page.screenshot({ path: '/tmp/mikes-screenshot.png', fullPage: true });
    console.log('Screenshot saved to /tmp/mikes-screenshot.png');
  } catch (error) {
    console.error('Failed to take screenshot:', error.message);
  }
  
  await browser.close();
})();
