function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    let notifications = 0;
    let indirectNotifications = 0;

    const notificationElement = document.querySelector('#notifications_amount');
    const ticketElement = document.querySelector(
      "a[href='tickets.php'] > span",
    );
    const callElement = document.querySelector('#queue_amount');

    if (notificationElement) {
      notifications = Easychat.safeParseInt(
        notificationElement.getAttribute('datacount'),
      );
    }

    if (ticketElement !== null) {
      indirectNotifications = Easychat.safeParseInt(ticketElement.textContent);
    }

    if (callElement) {
      indirectNotifications += Easychat.safeParseInt(
        callElement.getAttribute('datacount'),
      );
    }

    Easychat.setBadge(notifications, indirectNotifications);
  };

  Easychat.loop(getMessages);
  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
