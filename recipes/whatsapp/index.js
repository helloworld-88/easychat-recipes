module.exports = Easychat =>
  class Messenger extends Easychat {
    overrideUserAgent() {
      return window.navigator.userAgent
        .replaceAll(/(Easychat|Electron)\/\S+ \([^)]+\)/g, '')
        .trim();
    }

    modifyRequestHeaders() {
      return [
        {
          headers: {
            'user-agent': window.navigator.userAgent
              .replaceAll(/(Easychat|Electron)\/\S+ \([^)]+\)/g, '')
              .trim(),
          },
          requestFilters: {
            urls: ['*://*/*'],
          },
        },
      ];
    }
  };
