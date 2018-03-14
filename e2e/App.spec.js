describe('App screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should have a startButton', async () => {
    await expect(element(by.id('runningState'))).toHaveText('Stopped');
    await element(by.id('startButton')).tap();
    await expect(element(by.id('runningState'))).toHaveText('Running');
  })

});