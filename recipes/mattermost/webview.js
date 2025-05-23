function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const DIRECT_MESSAGES_INDIVIDUAL =
    '#sidebar-left .unread-title .DirectChannel__profile-picture';
  const DIRECT_MESSAGES_GROUP = '#sidebar-left .unread-title .status--group';
  const DIRECT_MESSAGES_LEGACY = '.sidebar--left .has-badge .badge';
  const ALL_MESSAGES = '#sidebar-left .unread-title';
  const ALL_MESSAGES_LEGACY = '#sidebar-left .unread-title';

  const getMessages = () => {
    const directMessagesSelector = [
      DIRECT_MESSAGES_LEGACY,
      DIRECT_MESSAGES_INDIVIDUAL,
      DIRECT_MESSAGES_GROUP,
    ].join(', ');
    const directMessages = document.querySelectorAll(
      directMessagesSelector,
    ).length;

    const allMessagesSelector = [ALL_MESSAGES, ALL_MESSAGES_LEGACY].join(', ');
    const allMessages =
      document.querySelectorAll(allMessagesSelector).length - directMessages;

    const teamDirectMessages = document.querySelectorAll(
      '.team-wrapper .team-container .badge',
    ).length;
    const teamMessages =
      document.querySelectorAll('.team-wrapper .unread').length -
      teamDirectMessages;

    Easychat.setBadge(
      directMessages + teamDirectMessages,
      allMessages + teamMessages,
    );
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
