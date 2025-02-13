describe('Swipeable List', () => {
    it('should swipe to reveal delete button', async () => {
      await element(by.id('list-item')).swipe('left');
      await expect(element(by.id('delete-button'))).toBeVisible();
    });
  });