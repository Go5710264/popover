import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

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
    await page.waitForSelector('btn'); // дожаться появления кнопки

    const button = await page.$('.btn'); // получить доступ к кнопке

    await page.click(button); // клик по кнопке
    await page.waitForSelector('popover-wrapper'); // дождаться появления поповера
  });
});
