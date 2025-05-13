function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    let unreadCount = 0;
    for (const counterElement of document.querySelectorAll('.GCSDBRWBMXB')) {
      const unreadCounter = Easychat.safeParseInt(counterElement.textContent);
      unreadCount = Math.max(unreadCount, unreadCounter);
    }

    Easychat.setBadge(unreadCount);
  };
  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
