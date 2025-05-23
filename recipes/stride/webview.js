function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    // get all message badges
    const allBadges = document.querySelectorAll('.activity-indicator');
    let directCount = 0;
    let indirectCount = 0;

    // get unread direct messages by tring to read the badge values
    for (const item of allBadges) {
      if (item.dataset.count) {
        // Count for DMs should be in the data-count attribute
        directCount += Math.max(1, +item.dataset.count);
      } else {
        // this will be the case for indirect messages
        indirectCount += 1;
      }
    }

    // set Easychat badge
    Easychat.setBadge(directCount, indirectCount);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
