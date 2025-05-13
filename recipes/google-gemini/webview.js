function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  if (
    location.hostname === 'workspace.google.com' &&
    location.href.includes('products/gemini/')
  ) {
    location.href =
      'https://accounts.google.com/AccountChooser?continue=https://gemini.google.com/u/0/';
  }

  Easychat.handleDarkMode(isEnabled => {
    localStorage.setItem('theme', isEnabled ? 'dark' : 'light');
  });

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
