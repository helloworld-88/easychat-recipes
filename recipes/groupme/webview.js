function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    // array-ify the list of conversations
    const unreadConversations = [
      ...document.querySelectorAll('#tray .tray-list .list-item.unread'),
    ];
    // for each conversation on the list...
    const filteredConversations = unreadConversations.filter(e => {
      // keep it on the list if it isn't muted (not .muted)
      return !e.innerHTML.includes('muted');
    });
    const unreadUnmutedConversations = filteredConversations.length;

    // set Easychat badge
    Easychat.setBadge(unreadUnmutedConversations);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
