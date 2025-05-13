function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const unreadMessageCountElement = document.querySelector(
      '#notifications-anchor .badge',
    );
    const unreadMessagesCount = Easychat.safeParseInt(
      unreadMessageCountElement.textContent,
    );
    Easychat.setBadge(unreadMessagesCount, 0);
  };
  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
