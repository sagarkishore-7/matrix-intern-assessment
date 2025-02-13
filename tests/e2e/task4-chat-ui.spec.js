describe('Chat UI', () => {
    it('sends and displays a message', async () => {
      await element(by.id('message-input')).typeText('Hello');
      await element(by.id('send-button')).tap();
      await expect(element(by.text('Hello'))).toBeVisible();
    });
  });