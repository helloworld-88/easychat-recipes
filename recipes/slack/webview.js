function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

const SELECTOR_CHANNELS_UNREAD =
  '.p-channel_sidebar__channel--unread:not(.p-channel_sidebar__channel--muted)';

module.exports = Easychat => {
  const getMessages = () => {
    const directMessages = document.querySelectorAll(
      `${SELECTOR_CHANNELS_UNREAD} .p-channel_sidebar__badge, .p-channel_sidebar__link--unread:not([data-sidebar-link-id="Punreads"]):not([data-sidebar-link-id="Pdrafts"]):not([data-sidebar-link-id="Pdms"]):not([data-sidebar-link-id="Ppaid-benefits"])`,
    ).length;
    const allMessages =
      document.querySelectorAll(SELECTOR_CHANNELS_UNREAD).length -
      directMessages;
    Easychat.setBadge(directMessages, allMessages);
  };

  const getActiveDialogTitle = () => {
    const element = document.querySelector(
      '.p-channel_sidebar__channel--selected .p-channel_sidebar__name',
    );

    Easychat.setDialogTitle(
      element && element.firstChild ? element.firstChild.textContent : null,
    );
  };

  const loopFunc = () => {
    getMessages();
    getActiveDialogTitle();
  };

  Easychat.loop(loopFunc);

  const getTeamIcon = function getTeamIcon(count = 0) {
    let countTeamIconCheck = count;
    let bgUrl = null;
    // INFO: A new Slack UI was introduced in August 2023 and will be rolled out gradually,
    // therefore we need to support both old and new UI for the time being
    // See more: https://slack.com/blog/productivity/a-redesigned-slack-built-for-focus
    const oldSlackUiTeamMenu = document.querySelector(
      '#team-menu-trigger, .p-ia__sidebar_header__team_name',
    );
    const newSlackUiTeamMenu = document.querySelector(
      '.p-ia4_home_header_menu__button',
    );

    if (oldSlackUiTeamMenu || newSlackUiTeamMenu) {
      if (oldSlackUiTeamMenu) {
        oldSlackUiTeamMenu.click();
      } else if (newSlackUiTeamMenu) {
        newSlackUiTeamMenu.click();
      }

      const icon = document.querySelector('.c-team_icon');

      if (icon) {
        bgUrl = window
          .getComputedStyle(icon, null)
          .getPropertyValue('background-image');
        bgUrl = /^url\((["']?)(.*)\1\)$/.exec(bgUrl);
        bgUrl = bgUrl ? bgUrl[2] : '';
      }

      setTimeout(() => {
        document.querySelector('.ReactModal__Overlay').click();
      }, 10);
    }

    countTeamIconCheck += 1;

    if (bgUrl) {
      Easychat.setAvatarImage(bgUrl);
    } else if (countTeamIconCheck <= 5) {
      setTimeout(() => {
        getTeamIcon(countTeamIconCheck + 1);
      }, 2000);
    }
  };

  setTimeout(() => {
    getTeamIcon();
  }, 4000);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
