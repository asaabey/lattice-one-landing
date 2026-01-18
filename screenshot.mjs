import { chromium } from 'playwright';

async function takeScreenshot() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto('http://localhost:4173');
  await page.waitForTimeout(2000); // Wait for animations

  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  // Also log some CSS values to debug
  const bodyStyles = await page.evaluate(() => {
    const body = document.body;
    const computed = window.getComputedStyle(body);
    return {
      backgroundColor: computed.backgroundColor,
      color: computed.color,
      cssVariables: {
        primary: getComputedStyle(document.documentElement).getPropertyValue('--primary'),
        background: getComputedStyle(document.documentElement).getPropertyValue('--background'),
        foreground: getComputedStyle(document.documentElement).getPropertyValue('--foreground'),
      }
    };
  });

  console.log('Body styles:', JSON.stringify(bodyStyles, null, 2));

  await browser.close();
}

takeScreenshot().catch(console.error);
