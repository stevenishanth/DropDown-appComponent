import { DropDownPage } from './app.po';

describe('drop-down App', () => {
  let page: DropDownPage;

  beforeEach(() => {
    page = new DropDownPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
