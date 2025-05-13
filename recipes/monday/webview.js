function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    let count = 0;

    const counters = document.querySelectorAll(
      '.surface-control-component .item-counter, .surface-control-component .view-item-counter',
    );

    for (const counter of counters) {
      count += Easychat.safeParseInt(counter.textContent);
    }

    Easychat.setBadge(count);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
