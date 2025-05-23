function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    // Get value of <title> tag where in case of new messages the number of messages appear
    const title = document.querySelector('title');
    if (title) {
      const titleValue = title.text;
      // Extract the number from the tag
      const match = titleValue.match(/\d+/);
      const unread = match !== null && match.length > 0 ? match[0] : 0;

      // Set unread msgs badge
      Easychat.setBadge(Easychat.safeParseInt(unread));
    }
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
