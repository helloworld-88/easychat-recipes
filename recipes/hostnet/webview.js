function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    Easychat.setBadge(
      Easychat.safeParseInt(
        document.querySelectorAll('.badge.topbar-launcherbadge')[0].firstChild
          .data,
      ),
    );
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
