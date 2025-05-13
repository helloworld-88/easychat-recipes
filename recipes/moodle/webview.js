function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const directCountSelector = [
      ...document.querySelectorAll('[data-region="count-container"]'),
    ];
    const totalMessageCount = directCountSelector.reduce(
      (count, item) => count + Easychat.safeParseInt(item.textContent),
      0,
    );

    Easychat.setBadge(totalMessageCount, 0);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
