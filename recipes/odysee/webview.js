function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  function getNotifications() {
    let unreadNotifications = 0;
    for (const notificationCounterElement of document.querySelectorAll(
      '.notification__count',
    )) {
      unreadNotifications += Easychat.safeParseInt(
        notificationCounterElement.textContent,
      );
    }

    Easychat.setBadge(unreadNotifications);
  }
  Easychat.loop(getNotifications);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
