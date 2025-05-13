function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    let count = document.querySelectorAll(
      '._5fx8:not(._569x),._1ht3:not(._569x)',
    ).length;
    const messageRequestsElement = document.querySelector('._5nxf');

    if (messageRequestsElement) {
      count += Easychat.safeParseInt(messageRequestsElement.textContent);
    }

    Easychat.setBadge(count);
  };

  Easychat.loop(getMessages);

  localStorage.setItem(
    '_cs_desktopNotifsEnabled',
    JSON.stringify({
      __t: Date.now(),
      __v: true,
    }),
  );

  if (typeof Easychat.onNotify === 'function') {
    Easychat.onNotify(notification => {
      if (typeof notification.title !== 'string') {
        notification.title =
          ((notification.title.props || {}).content || [])[0] || 'Campuswire';
      }

      if (typeof notification.options.body !== 'string') {
        notification.options.body =
          (((notification.options.body || {}).props || {}).content || [])[0] ||
          '';
      }

      return notification;
    });
  }

  Easychat.injectCSS(_path.default.join(__dirname, 'css', 'franz.css'));
};
