import { ExchangeFtPage } from './app.po';

describe('exchange-ft App', () => {
  let page: ExchangeFtPage;

  beforeEach(() => {
    page = new ExchangeFtPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to exc!');
  });
});
