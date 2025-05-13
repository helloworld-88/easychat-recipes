function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    $.get('/api/_/tickets?filter=unresolved', data => {
      Easychat.setBadge(data.tickets.length);
    });
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));

  /* block popups (prevents freshconnect from opening in a new window) */
  window.open = function (url, name) {
    // eslint-disable-next-line no-console
    console.log(`blocked window.open(${url}, ${name})`);
  };
};
