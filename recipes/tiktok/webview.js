function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const selNotifications = document.querySelector(
      'div.tiktok-1deszxq-DivHeaderInboxContainer.e18kkhh40 > sup',
    );
    const selDM = document.querySelector(
      'div.tiktok-9j9jz0-DivMessageIconContainer.e1nx07zo0 > sup',
    );

    const countNotifications =
      selNotifications == null
        ? 0
        : Easychat.safeParseInt(selNotifications.outerText);
    const countDM = selDM == null ? 0 : Easychat.safeParseInt(selDM.outerText);

    const count = countNotifications + countDM;

    Easychat.setBadge(count);
  };
  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
