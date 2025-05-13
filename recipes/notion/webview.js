function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    let direct = 0;
    const badgeDiv = document.querySelector(
      '.notion-sidebar-container > div > div > div > :nth-child(4) > :nth-child(2) > div > :nth-child(3) > div > div',
    );
    if (badgeDiv) {
      direct = Easychat.safeParseInt(badgeDiv.textContent);
    }

    Easychat.setBadge(direct);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
