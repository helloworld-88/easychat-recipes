function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const allMessages = Easychat.safeParseInt(
      document.querySelector('.team-counter').textContent,
    );
    Easychat.setBadge(allMessages);
  };
  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
