const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Desktop view
    await page.setViewport({ width: 1200, height: 800 });
    await page.goto('http://localhost:8888', { waitUntil: 'networkidle2', timeout: 30000 });
    
    // Wait for animations
    await page.waitForTimeout(2000);
    
    // Take screenshot
    await page.screenshot({ 
      path: 'screenshot-desktop.png',
      fullPage: true 
    });
    
    console.log('✓ Desktop screenshot saved: screenshot-desktop.png');
    
    // Mobile view
    await page.setViewport({ width: 375, height: 812 });
    await page.screenshot({ 
      path: 'screenshot-mobile.png',
      fullPage: true 
    });
    
    console.log('✓ Mobile screenshot saved: screenshot-mobile.png');
    
  } catch (error) {
    console.error('Screenshot error:', error.message);
  } finally {
    await browser.close();
  }
})();
