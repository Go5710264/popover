import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); 

describe('popover function test', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 250,
      devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('the appearance of a popover', async () => {
    await page.goto(baseUrl);
    await page.waitForSelector('.btn'); 
    await page.click('.btn'); 
    await page.waitForSelector('.popover-wrapper'); 
    await page.click('.btn'); 
  });
});
