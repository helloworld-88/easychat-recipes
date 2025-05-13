function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  // Inject css
  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));

  // Get notifications
  Easychat.loop(() => {
    const notifications = document
      .querySelectorAll('[href$=notifications]')
      .item(0);
    // Null if not present
    if (!notifications) {
      return;
    }
    // Assume first element contains the number of notifications
    const parsedValue = Easychat.safeParseInt(notifications.outerText);
    // Set to parsed value
    Easychat.setBadge(parsedValue);
  });
};
