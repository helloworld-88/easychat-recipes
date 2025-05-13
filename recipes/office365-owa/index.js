module.exports = Easychat =>
  class Outlook extends Easychat {
    overrideUserAgent() {
      return window.navigator.userAgent
        .replaceAll(/(Easychat|Electron)\/\S+ \([^)]+\)/g, '')
        .trim();
    }
  };
