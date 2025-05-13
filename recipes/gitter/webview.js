function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    // get unread messages
    let directCount = 0;
    for (const node of document.querySelectorAll('div.unread-indicator')) {
      directCount += Easychat.safeParseInt(node.textContent);
    }

    const channelMentionCount =
      document.querySelectorAll('.mention-indicator').length;

    // set Easychat badge
    Easychat.setBadge(directCount, channelMentionCount);
  };

  Easychat.loop(getMessages);

  // Hide download message
  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
