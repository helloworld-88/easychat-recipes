function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  // Tweetdeck redirect fix
  Easychat.ipcRenderer.on('redirect-url', (event, url) => {
    window.location.assign(url);
  });

  const getMessages = () => {
    const elements = document.querySelectorAll('.msg-unread-count');
    let count = 0;
    if (elements[0]) {
      count = Easychat.safeParseInt(elements[0].textContent);
    }

    Easychat.setBadge(count);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
