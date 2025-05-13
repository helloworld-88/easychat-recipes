function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const updateBadge = function updateBadge() {
    Easychat.injectJSUnsafe(_path.default.join(__dirname, 'webview-unsafe.js'));
  };

  Easychat.loop(updateBadge);
};
