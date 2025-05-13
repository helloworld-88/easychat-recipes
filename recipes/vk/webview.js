function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    let directs = 0;
    const element = document.querySelectorAll('.left_count');
    if (element.length > 0) {
      directs = Easychat.safeParseInt(element[0].textContent);
    }

    Easychat.setBadge(directs);
  };

  const getActiveDialogTitle = () => {
    const element = [
      document.querySelector(
        '.FCWindow--active .FCWindow__title .ConvoTitle__title',
      ),
      document.querySelector('.im-page_history-show ._im_page_peer_name'),
    ].find(Boolean);

    Easychat.setDialogTitle(element ? element.textContent : null);
  };

  const loopFunc = () => {
    getMessages();
    getActiveDialogTitle();
  };

  Easychat.loop(loopFunc);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
