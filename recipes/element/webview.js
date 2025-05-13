function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  function getMessages() {
    const matches = document
      .querySelector('title')
      .textContent.match('(?<=\\[)\\d+(?=])');
    const directCount = Easychat.safeParseInt(matches === null ? 0 : matches[0]);
    const indirectCount = document
      .querySelector('.mx_SpaceTreeLevel')
      .querySelectorAll('.mx_NotificationBadge_dot').length;
    Easychat.setBadge(directCount, indirectCount);
  }

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
