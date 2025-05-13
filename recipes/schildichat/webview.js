function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  function getMessages() {
    const directMatches = document
      .querySelector('title')
      .textContent.match('(?<=\\[)\\d+(?=])');
    Easychat.setBadge(
      Easychat.safeParseInt(directMatches === null ? 0 : directMatches[0]),
      document
        .querySelector('.mx_SpaceTreeLevel')
        .querySelectorAll('.mx_NotificationBadge_dot').length,
    );
  }

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
