function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = (Easychat, settings) => {
  const collectCounts = selector => {
    let unreadCount = 0;
    const foldersElement = document.querySelector(selector);
    if (foldersElement) {
      const allScreenReaders = foldersElement.querySelectorAll(
        'span.screenReaderOnly',
      );
      for (const child of allScreenReaders) {
        if (child.previousSibling) {
          unreadCount += Easychat.safeParseInt(
            child.previousSibling.textContent,
          );
        }
      }
    }
    return unreadCount;
  };

  const getMessages = () => {
    let directUnreadCount = 0;
    let indirectUnreadCount = 0;
    if (/\/owa/.test(location.pathname)) {
      // classic app
      directUnreadCount = Easychat.safeParseInt(
        document.querySelectorAll("span[title*='Inbox'] + div > span")[0]
          ?.textContent,
      );
    } else {
      // new app
      directUnreadCount =
        settings.onlyShowFavoritesInUnreadCount === true
          ? collectCounts('div[role=tree]:nth-child(2)')
          : collectCounts('div[role=tree]:nth-child(1)');

      indirectUnreadCount = collectCounts('div[role=tree]:nth-child(4)'); // groups
    }

    Easychat.setBadge(directUnreadCount, indirectUnreadCount);
  };
  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
