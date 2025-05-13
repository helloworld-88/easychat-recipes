function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const notificationBadge = document.querySelector(
      '.siteHeader__topLevelItem--profileIcon .headerPersonalNav .modalTrigger .headerPersonalNav__icon .headerPersonalNav__flag',
    );
    const notification = notificationBadge
      ? Easychat.safeParseInt(notificationBadge.textContent)
      : 0;

    Easychat.setBadge(notification);
  };
  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
