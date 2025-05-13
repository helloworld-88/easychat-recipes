module.exports = Easychat =>
  class Threads extends Easychat {
    overrideUserAgent() {
      return window.navigator.userAgent
        .replaceAll(/(Easychat|Electron)\/\S+ \([^)]+\)/g, '')
        .trim();
    }
  };
