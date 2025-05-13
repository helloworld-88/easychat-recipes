function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const directSelector = document.querySelector(
      '.subscriptions-feed .app-navigation-entry-utils-counter',
    );
    const direct = directSelector
      ? Easychat.safeParseInt(directSelector.textContent)
      : 0;

    Easychat.setBadge(direct);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
