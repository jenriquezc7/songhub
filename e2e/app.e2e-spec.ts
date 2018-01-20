import { SonghubPage } from './app.po';

describe('songhub App', () => {
  let page: SonghubPage;

  beforeEach(() => {
    page = new SonghubPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
