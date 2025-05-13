function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const indirect = document.querySelectorAll('.new-messages');
    let direct = 0;
    for (const badge of document.querySelectorAll('.people-pane .badge')) {
      direct += Easychat.safeParseInt(badge.textContent);
    }
    Easychat.setBadge(direct, indirect);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
