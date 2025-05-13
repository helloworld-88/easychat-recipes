function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const hasNotification = document.querySelectorAll(
      '.SidebarTopNavLinks-notificationsButtonIndicator',
    );
    Easychat.setBadge(hasNotification.length > 0 ? 1 : 0);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
