import {device, by, expect, element} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should load home screen', async () => {
    await expect(element(by.id('home-screen'))).toExist();
  });

  it('should return matching coin pairs on search', async () => {
    await element(by.id('textField')).replaceText('btcng');
    await expect(element(by.text('BTCNGN'))).toBeVisible();
  });

  it('should show coin detail screen after coin tap', async () => {
    await element(by.id('coin-item')).atIndex(2).tap();
    await expect(element(by.id('detail-screen'))).toExist();
  });
});
