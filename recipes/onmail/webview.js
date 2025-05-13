function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    let countImportant = 0;
    const inboxLinks = document.querySelectorAll('p.truncate');
    for (const label of inboxLinks) {
      if (label.textContent) {
        const inboxCount = label.nextSibling;
        countImportant =
          inboxCount === null
            ? 0
            : Easychat.safeParseInt(inboxCount.textContent);

        break;
      }
    }
    Easychat.setBadge(countImportant, 0);
  };
  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
