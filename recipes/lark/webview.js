function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const ele = document.querySelectorAll(
      '.larkc-badge-count.navbarMenu-badge',
    );
    if (ele.length === 0) {
      Easychat.setBadge(0);
      return;
    }
    Easychat.setBadge(ele[0].textContent);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
