function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const calculateTotalDirectMessages = () =>
    [...document.querySelectorAll('.chats-list-element')]
      .map(el =>
        Easychat.safeParseInt(
          el.querySelector('.m-indicator .number').textContent,
        ),
      )
      .reduce((curr, prev) => curr + prev, 0);

  Easychat.loop(() => Easychat.setBadge(calculateTotalDirectMessages()));

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
