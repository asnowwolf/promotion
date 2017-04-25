import { PromotionPage } from './app.po';

describe('promotion App', () => {
  let page: PromotionPage;

  beforeEach(() => {
    page = new PromotionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
