function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    let unread = 0;
    const notificationBadge = document.querySelectorAll(
      '.notification-badge',
    )[0];
    if (notificationBadge !== undefined) {
      unread = Easychat.safeParseInt(notificationBadge.textContent);
    }
    Easychat.setBadge(unread);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
