import { browser, by, element } from 'protractor';

export class ExchangeFtPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('exc-root h1')).getText();
  }
}
