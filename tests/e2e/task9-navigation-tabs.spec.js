describe('Navigation', () => {
    it('navigates to the profile screen', async () => {
      await element(by.id('profile-tab')).tap();
      await expect(element(by.text('Profile'))).toBeVisible();
    });
  });