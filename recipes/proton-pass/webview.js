function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  // TODO: If your Proton Pass service has unread messages, uncomment these lines to implement the logic for updating the badges
  // const getMessages = () => {
  //   // TODO: Insert your notification-finding code here
  //   Easychat.setBadge(0, 0);
  // };
  // Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
