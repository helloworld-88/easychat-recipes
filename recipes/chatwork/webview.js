function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    let directCount = 0;
    let indirectCount = 0;
    const roomInfoContainer = document.querySelectorAll('li.sc-dnqmqq');
    Array.prototype.forEach.call(roomInfoContainer, room => {
      let count = 0;
      const unreadBadge = room.querySelector('span.sc-kAzzGY');
      const unreadBadgeHasMention = room.querySelector(
        'li._unreadBadge.sc-cSHVUG',
      );

      if (unreadBadge && unreadBadge.textContent) {
        count = Easychat.safeParseInt(unreadBadge.textContent);
      }

      if (count > 0) {
        if (
          room
            .querySelector('img.sc-gqjmRU')
            .getAttribute('src')
            .includes('avatar')
        ) {
          directCount += 1;
        } else if (unreadBadgeHasMention) {
          directCount += 1;
        } else {
          indirectCount += 1;
        }
      }
    });
    Easychat.setBadge(directCount, indirectCount);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
