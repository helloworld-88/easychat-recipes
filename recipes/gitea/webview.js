function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const directCountElement = document.querySelector('.notification_count');
    let directCount = 0;
    if (directCountElement) {
      directCount = Easychat.safeParseInt(directCountElement.textContent);
    }

    Easychat.setBadge(directCount, 0);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
