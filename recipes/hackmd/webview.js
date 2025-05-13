function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    // get unread messages
    const count = document.querySelectorAll('.guilds-wrapper .badge').length;

    // set Easychat badge
    Easychat.setBadge(count);
  };

  Easychat.loop(getMessages);

  // Hide download message
  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
