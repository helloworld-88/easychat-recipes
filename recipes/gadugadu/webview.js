function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const updates = Easychat.safeParseInt(
      document.querySelector('i#sr-last-counter').textContent,
    );
    let messages = 0;
    const elements = document.querySelectorAll('.chat-counter:not(.d-none)');
    for (const element of elements) {
      messages += Easychat.safeParseInt(element.textContent);
    }

    Easychat.setBadge(messages, updates);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
