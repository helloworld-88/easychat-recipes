module.exports = Easychat =>
  class Instagram extends Easychat {
    overrideUserAgent() {
      return window.navigator.userAgent
        .replaceAll(/(Easychat|Electron)\/\S+ \([^)]+\)/g, '')
        .trim();
    }
  };
