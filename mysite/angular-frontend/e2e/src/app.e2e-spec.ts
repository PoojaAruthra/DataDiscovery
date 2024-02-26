import { AppPage } from './app.po';

describe('angular-frontend App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
    expect(await page.getParagraphText()).toEqual('Welcome to the SiMPL Siemens brand example application!');
  });
});
