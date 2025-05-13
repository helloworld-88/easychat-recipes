function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const newCountMatch = document
      .querySelector('a.h6[href^="/notifications?query="]')
      ?.textContent?.match(/\d+/);
    Easychat.setBadge(
      Easychat.safeParseInt(
        document.querySelector('li[data-item-id="inbox"] .Counter')
          ?.textContent,
      ) + Easychat.safeParseInt(newCountMatch ? newCountMatch[0] : 0),
      document.querySelectorAll(
        '#AppHeader-notifications-button.AppHeader-button--hasIndicator, ' +
          '[data-target="notification-indicator.badge"]:not([hidden])',
      ).length,
    );
  };
  Easychat.loop(getMessages);
  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
