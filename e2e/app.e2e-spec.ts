import { DemoAPage } from './app.po';

describe('demo-a App', function() {
  let page: DemoAPage;

  beforeEach(() => {
    page = new DemoAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
