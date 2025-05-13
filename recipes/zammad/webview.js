function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = function getMessages() {
    const notificationsCounter = document.querySelector(
      '.js-notificationsCounter',
    );
    Easychat.setBadge(Easychat.safeParseInt(notificationsCounter.textContent));
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
