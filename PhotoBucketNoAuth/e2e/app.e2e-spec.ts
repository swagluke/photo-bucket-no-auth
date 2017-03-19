import { PhotoBucketNoAuthPage } from './app.po';

describe('photo-bucket-no-auth App', () => {
  let page: PhotoBucketNoAuthPage;

  beforeEach(() => {
    page = new PhotoBucketNoAuthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
