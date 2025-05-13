function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    let direct = 0;

    const MessageElement = document.querySelector(
      '[id=global_nav_conversations_link]',
    );
    if (MessageElement) {
      direct += Easychat.safeParseInt(MessageElement.textContent);
    }

    Easychat.setBadge(direct);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
