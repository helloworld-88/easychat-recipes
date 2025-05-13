function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    let direct = 0;
    let indirect = 0;
    const chatsElement = document.querySelector('#chats');
    const notifications = document.querySelector('#notifications span span');

    if (notifications) {
      indirect = Easychat.safeParseInt(notifications.textContent);
    }

    if (chatsElement) {
      if (chatsElement.hasAttribute('aria-current')) {
        direct = document.querySelectorAll(
          '[data-pagelet="WorkGalahadChannel"] .uiList [role="gridcell"] [role="button"] .oxk9n0fw',
        ).length;
      } else {
        const chatMessages = chatsElement.querySelector('span');

        if (chatMessages) {
          direct = Easychat.safeParseInt(chatMessages.textContent);
        }
      }
    }

    Easychat.setBadge(direct, indirect);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'workplace.css'));

  localStorage._cs_desktopNotifsEnabled = JSON.stringify({
    __t: Date.now(),
    __v: true,
  });

  if (typeof Easychat.onNotify === 'function') {
    Easychat.onNotify(notification => {
      if (typeof notification.title !== 'string') {
        notification.title =
          ((notification.title.props || {}).content || [])[0] || 'Work Chat';
      }

      if (typeof notification.options.body !== 'string') {
        notification.options.body =
          (((notification.options.body || {}).props || {}).content || [])[0] ||
          '';
      }

      return notification;
    });
  }
};
