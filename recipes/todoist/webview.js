function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  function getTasks() {
    let todayCount = 0;
    let inboxCount = 0;
    const todayElement = document.querySelector(
      '#filter_today div div a + span div span',
    );
    const inboxElement = document.querySelector(
      '#filter_inbox div div a + span div span',
    );

    if (todayElement) {
      todayCount = Easychat.safeParseInt(todayElement.textContent);
    }

    if (inboxElement) {
      inboxCount = Easychat.safeParseInt(inboxElement.textContent);
    }

    Easychat.setBadge(inboxCount, todayCount);
  }

  Easychat.loop(getTasks);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
