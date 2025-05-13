function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const element = document.querySelector('[href="/notifications"] > div');
    const content = window
      .getComputedStyle(element, ':after')
      .getPropertyValue('content')
      .match(/\d+/);
    const notifications = Number(content);

    Easychat.setBadge(notifications);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
