function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  let checkIsRun = false;
  const checkHeightAction = () => {
    checkIsRun = true;
    const checkHeight = setInterval(() => {
      const menuPanel = document.querySelector('#menu-pannel');
      if (!menuPanel) {
        return;
      }
      if (menuPanel.parentElement) {
        menuPanel.parentElement.setAttribute(
          'style',
          `height:${window.outerHeight - 60}px`,
        );
      }
      clearInterval(checkHeight);
      checkIsRun = false;
    }, 1000);
  };

  checkHeightAction();

  window.addEventListener('resize', () => {
    if (!checkIsRun) {
      checkHeightAction();
    }
  });

  const getMessages = () => {
    const x = document.querySelectorAll('.unread-num em.ng-binding');
    Easychat.setBadge(x.length > 0 ? x[0].textContent : 0);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'style.css'));
};
