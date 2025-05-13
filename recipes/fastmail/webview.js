function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const inbox = document.querySelector(
      '.v-MailboxSource--inbox .v-MailboxSource-badge',
    );

    const messages = inbox ? Easychat.safeParseInt(inbox.textContent) : 0;
    Easychat.setBadge(messages);
  };

  Easychat.loop(getMessages);

  Easychat.injectJSUnsafe(_path.default.join(__dirname, 'webview-unsafe.js'));
};
