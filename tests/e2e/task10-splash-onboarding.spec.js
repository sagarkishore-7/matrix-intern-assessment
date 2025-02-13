describe('Splash Screen', () => {
    it('displays the splash screen', async () => {
      await expect(element(by.id('splash-text'))).toBeVisible();
    });
  });