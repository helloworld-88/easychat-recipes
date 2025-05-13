function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}
const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  Easychat.handleDarkMode(isEnabled => {
    localStorage.setItem('theme', isEnabled ? 'dark' : 'light');
  });

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));

  Easychat.loop(() => {
    const unreadElements = document.querySelectorAll(
      '.highlight, .highlight-mention',
    );
    let unreadCount = 0;

    if (unreadElements.length > 0) {
      unreadCount = unreadElements.length;
    }

    Easychat.setBadge(unreadCount);
  });
};
