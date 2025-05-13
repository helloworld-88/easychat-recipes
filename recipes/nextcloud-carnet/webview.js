function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const directSelector = document.querySelectorAll(
      '.app-navigation-entry-utils-counter.highlighted',
    );
    const direct = directSelector
      ? Easychat.safeParseInt(directSelector.length)
      : 0;

    const indirectSelector = document.querySelectorAll(
      '.app-navigation-entry-utils-counter:not(.highlighted)',
    );
    const indirect = indirectSelector
      ? Easychat.safeParseInt(indirectSelector.length)
      : 0;

    Easychat.setBadge(direct, indirect);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
