module.exports = Easychat =>
  class Messenger extends Easychat {
    overrideUserAgent() {
      return window.navigator.userAgent.replaceAll(
        /(Easychat|Electron)(\S+\s)/g,
        '',
      );
    }
  };
