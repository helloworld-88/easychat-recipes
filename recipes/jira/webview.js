function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    // get unread messages
    const element = document.querySelector(
      '#atlassian-navigation-notification-count span',
    );
    Easychat.setBadge(element ? element.textContent : 0);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
