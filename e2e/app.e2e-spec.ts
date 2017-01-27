import { IlluminatiClubPage } from './app.po';

describe('illuminati-club App', function() {
  let page: IlluminatiClubPage;

  beforeEach(() => {
    page = new IlluminatiClubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
