function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const elements = document.querySelectorAll('.CxUIE, .unread');
    let count = 0;
    for (const element of elements) {
      if (element.querySelectorAll('*[data-icon="muted"]').length === 0) {
        count += 1;
      }
    }

    Easychat.setBadge(count);
  };

  Easychat.loop(getMessages);
  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
