function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  Easychat.handleDarkMode(isEnabled => {
    localStorage.setItem('theme', isEnabled ? 'dark' : 'light');
  });

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
