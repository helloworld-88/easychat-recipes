function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

const NOTIFICATION_BADGE_CLASS = '.badge-round';

module.exports = Easychat => {
  const getMessages = () => {
    const badges = [...document.querySelectorAll(NOTIFICATION_BADGE_CLASS)];
    const messages = badges.reduce(
      (currentValue, element) => currentValue + Number(element.textContent),
      0,
    );

    Easychat.setBadge(messages);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
