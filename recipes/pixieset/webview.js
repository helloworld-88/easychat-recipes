function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const element = document.querySelector('.notification-count');
    Easychat.setBadge(
      element ? Easychat.safeParseInt(element.textContent.match(/\d+/)[0]) : 0,
    );
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
