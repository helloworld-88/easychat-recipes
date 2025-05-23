function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    let directMessages = 0;
    let indirectMessages = 0;
    const notificationElement = document.querySelectorAll(
      'div.badge-136 div.fui-CounterBadge',
    )[1];
    const newMessagesElement = document.querySelectorAll(
      'div.badge-136 div.fui-CounterBadge',
    )[0];

    if (notificationElement) {
      directMessages = Easychat.safeParseInt(notificationElement.textContent);
    }

    if (newMessagesElement) {
      indirectMessages = Easychat.safeParseInt(
        newMessagesElement.textContent.match(/\d+/)[0],
      );
    }

    Easychat.setBadge(directMessages, indirectMessages);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
