describe('App screen', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have welcome screen', async () => {
    await expect(element(by.id('welcome'))).toBeVisible();
  });

  it('should count to 1 if pressed once', async () => {
    await expect(element(by.id('runningState'))).toHaveText('0');
    await element(
      by.id('startButton').withAncestor(by.id('counterContainer')),
    ).tap();
    await expect(element(by.id('runningState'))).toHaveText('1');
  });

  it('should count to 4 if pressed 4 times', async () => {
    await expect(element(by.id('runningState'))).toHaveText('0');
    await element(
      by.id('startButton').withAncestor(by.id('counterContainer')),
    ).multiTap(4);
    await expect(element(by.id('runningState'))).toHaveText('4');
  });

  it('should write into TextInput', async () => {
    await element(by.id('input')).typeText('Hello World!');
    await element(by.id('input')).clearText();
    await element(by.id('input')).typeText('Bye!');
  });

  it('should scroll the name by 1', async () => {
    await element(by.id('list')).scroll(100, 'down');
  });

  it('should scroll till list end', async () => {
    await element(by.id('list')).swipe('up', 'slow');
  });
});
