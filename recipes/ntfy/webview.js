function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const msgRaw = document.title.match(/\(\d*\)/);
    let messages = 0;

    if (msgRaw) {
      messages = Easychat.safeParseInt(msgRaw[0].slice(1));
    }

    Easychat.setBadge(messages, 0);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
