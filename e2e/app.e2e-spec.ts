import { PianoAppPage } from './app.po';

describe('piano-app App', () => {
  let page: PianoAppPage;

  beforeEach(() => {
    page = new PianoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
