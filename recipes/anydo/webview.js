function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  function getTasks() {
    let incompleteCount = 0;

    const countEls = document.querySelectorAll(
      '.AppSidebarGroupsItems__item__link[href^="/tasks/lists/"] .AppSidebarGroupsItems__item__badge > .AppSidebarGroupsItems__item__badge__count > div',
    );

    if (countEls.length > 0) {
      for (const el of countEls) {
        incompleteCount += Easychat.safeParseInt(el.textContent);
      }
    }

    Easychat.setBadge(incompleteCount);
  }

  Easychat.loop(getTasks);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
