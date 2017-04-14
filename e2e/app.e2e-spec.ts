import { MyNgFirebasePage } from './app.po';

describe('my-ng-firebase App', () => {
  let page: MyNgFirebasePage;

  beforeEach(() => {
    page = new MyNgFirebasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
