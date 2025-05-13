function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = function getMessages() {
    const unreadBadges = document.querySelectorAll('span.unread');
    const unreadBadgesArray = [...unreadBadges];
    const unreadMessagesCount = unreadBadgesArray.reduce(
      (previousValue, currentBadge) =>
        previousValue + Easychat.safeParseInt(currentBadge.textContent),
      0,
    );
    Easychat.setBadge(unreadMessagesCount);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
