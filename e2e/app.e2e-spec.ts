import { AngularComponentLibraryPage } from './app.po';

describe('angular-component-library App', () => {
  let page: AngularComponentLibraryPage;

  beforeEach(() => {
    page = new AngularComponentLibraryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
