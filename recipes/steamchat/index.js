module.exports = Easychat =>
  class SteamChat extends Easychat {
    overrideUserAgent() {
      return window.navigator.userAgent
        .replaceAll(/(Easychat|Electron)\/\S+ \([^)]+\)/g, '')
        .trim();
    }
  };
