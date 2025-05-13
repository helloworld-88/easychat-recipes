function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    let unreadCount = 0;
    $.each(
      $('[data-qa-has-unreads]'),
      (idx, item) =>
        (unreadCount += Easychat.safeParseInt(
          item.attributes['data-qa-has-unreads'].value,
        )),
    );

    Easychat.setBadge(unreadCount);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'whitemode.css'));
};
