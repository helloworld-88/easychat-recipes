function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const badges = document
      .querySelector('home-assistant')
      .shadowRoot.querySelector('home-assistant-main')
      .shadowRoot.querySelector('ha-sidebar')
      .shadowRoot.querySelectorAll('.notification-badge');
    if (badges.length > 0) {
      const count = Easychat.safeParseInt(
        badges[0].textContent.replaceAll(/[^\p{N}]/gu, ''),
      );
      Easychat.setBadge(count);
    } else {
      Easychat.setBadge(0);
    }
  };
  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
