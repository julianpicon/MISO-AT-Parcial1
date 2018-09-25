const wdio = require("webdriverio");

const opts = {
  port: 4723,
  desiredCapabilities: {
    platformName: "Android",
    platformVersion: "8.0",
    deviceName: "Android Emulator",
    /*appActivity: "de.danoeh.antennapod.activity.MainActivity",
    appWaitActivity: "de.danoeh.antennapod.activity.MainActivity",*/
    app: "/Users/julian2/Documents/MISO-AT-Parcial1/End2End Testing/antennapod/tests/antennapod.apk",
    automationName: "UiAutomator2"
  }
};

const client = wdio.remote(opts);

client
  .init();