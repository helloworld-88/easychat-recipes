function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  function getUnreadMentions() {
    const anchorWithMentionHref = document.querySelector(
      'a[href*="is/mentioned"]',
    );
    const unreadCountElement =
      anchorWithMentionHref.querySelector('.unread_count');

    return unreadCountElement == null
      ? 0
      : Easychat.safeParseInt(unreadCountElement.textContent);
  }

  function getUnreadCount(eltId) {
    const elt = document.querySelectorAll(`#${eltId} + .unread_count`)[0];
    return elt == null ? 0 : Easychat.safeParseInt(elt.textContent);
  }

  function getStreamsUnread() {
    const streamsHeader = document.querySelector('#streams_header');
    const unreadCountElement = streamsHeader.querySelector('.unread_count');

    return unreadCountElement == null
      ? 0
      : Easychat.safeParseInt(unreadCountElement.textContent);
  }

  //document.querySelector('#show_all_private_messages + .unread_count')
  const getMessages = () => {
    // All unread messages
    const streamUnread = getStreamsUnread();

    // Private messages
    const unreadPrivate = getUnreadCount('show_all_private_messages');

    // @ Mentions messages
    const unreadMentions = getUnreadMentions();

    const directMessages = unreadPrivate + unreadMentions;

    Easychat.setBadge(directMessages, streamUnread);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
