function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const numMessages = Easychat.safeParseInt(
      document.querySelector(
        '.left-nav [data-content="Inbox"] .unread__container .unread',
      ).textContent,
    );
    Easychat.setBadge(numMessages);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
