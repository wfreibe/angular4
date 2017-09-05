import { BookMonkeyPage } from './app.po';

describe('book-monkey App', () => {
  let page: BookMonkeyPage;

  beforeEach(() => {
    page = new BookMonkeyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to bm!');
  });
});
