function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  function getUnreadConversations() {
    Easychat.setBadge(
      document.querySelector('#unread-conversations').textContent,
    );
  }

  Easychat.loop(getUnreadConversations);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
