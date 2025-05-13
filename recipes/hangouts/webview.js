function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    // get unread messages
    let count = 0;
    for (const span of document.querySelectorAll('span[jsname=DW2nlb]'))
      count += Easychat.safeParseInt(span.textContent);

    // set Easychat badge
    Easychat.setBadge(count);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
