function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const unreadSpan = document.querySelector(
      'span.flag-count.message-count.unread-count',
    );
    let directCount = 0;
    if (unreadSpan) {
      directCount = Easychat.safeParseInt(unreadSpan.textContent);
    }
    Easychat.setBadge(directCount);
  };
  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
