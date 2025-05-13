function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    let direct = 0;

    const np = document.querySelector('#noti_np_count');
    const re = document.querySelector('#noti_re_count');

    if (np) {
      direct += Easychat.safeParseInt(np.textContent);
    }
    if (re) {
      direct += Easychat.safeParseInt(re.textContent);
    }

    Easychat.setBadge(direct);
  };

  Easychat.loop(getMessages, 10_000);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
