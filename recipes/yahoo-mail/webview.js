function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const count = Easychat.safeParseInt(
      document.querySelector(
        'a[data-test-folder-name="Inbox"] span[data-test-id="displayed-count"]',
      )?.textContent,
    );
    Easychat.setBadge(count);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
