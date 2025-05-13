function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const inbox = document.querySelector(
      '.topbar-notificationsButton.has-newNotifications',
    );
    const passiveCount = inbox === null ? 0 : 1;
    Easychat.setBadge(0, passiveCount);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'franz.css'));
};
