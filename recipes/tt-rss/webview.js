function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const _notificationCategory = new URL(window.location.href).searchParams.get(
    'easychatNotificationCategory',
  );

  const countMessagesUnderCategory = notificationCategory => {
    const elements = document.querySelectorAll('.dijitTreeIsRoot');
    let directMessages = 0;
    let indirectMessages = 0;
    for (const element of elements) {
      const label = element.querySelectorAll('.dijitTreeLabel')[0];
      const unreadNode = element.querySelectorAll('.unread')[0];
      const unreadAmount = Easychat.safeParseInt(unreadNode.textContent);
      if (label.textContent === notificationCategory) {
        directMessages += unreadAmount;
      } else {
        indirectMessages += unreadAmount;
      }
    }
    Easychat.setBadge(directMessages, indirectMessages);
  };

  const _countMessagesFromTitle = () => {
    const match = document.title.match(/^\((\d+)\) Tiny Tiny RSS$/);
    const count = match !== null && match.length > 0 ? match[1] : 0;
    return Easychat.safeParseInt(count);
  };

  const countMessages = () => {
    Easychat.setBadge(_countMessagesFromTitle());
  };

  const getMessages = function getMessages() {
    if (_notificationCategory) {
      countMessagesUnderCategory(_notificationCategory);
    } else {
      countMessages();
    }
  };

  const loopFunc = () => {
    getMessages();
  };

  Easychat.loop(loopFunc);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
