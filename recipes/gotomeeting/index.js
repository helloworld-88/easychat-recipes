module.exports = Easychat =>
  class Gotomeeting extends Easychat {
    overrideUserAgent() {
      return window.navigator.userAgent.replaceAll(
        /(Easychat|Electron)\/\S+ \([^)]+\)/g,
        '',
      );
    }
  };
