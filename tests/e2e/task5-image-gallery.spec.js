describe('Image Gallery', () => {
    it('uploads and displays an image', async () => {
      await element(by.id('upload-button')).tap();
      await expect(element(by.id('image-0'))).toBeVisible();
    });
  });