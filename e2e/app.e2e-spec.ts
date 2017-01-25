import { EnigmaFrontendPage } from './app.po';

describe('enigma-frontend App', function() {
  let page: EnigmaFrontendPage;

  beforeEach(() => {
    page = new EnigmaFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
