function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const elements = document.querySelectorAll('.unread');

    let count = 0;
    for (const element of elements) {
      if (
        Easychat.safeParseInt(
          element.textContent && element.textContent.replaceAll(/[^\d.]/g, ''),
        ) > 0
      ) {
        count += 1; // count 1 per channel with messages
      }
    }

    Easychat.setBadge(count);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
