function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const directMessages = $(
      '.module_btn.lonely_btn.white_btn.globalHeader__btn.accountDropdownBtn',
    )?.textContent;

    Easychat.setBadge(directMessages);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
