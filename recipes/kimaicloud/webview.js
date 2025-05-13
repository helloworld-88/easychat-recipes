function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    let count = 0;

    // get amount of running timesheets
    const label = document.querySelector(
      '.main-header .navbar .dropdown.messages-menu .ticktac span.label',
    );
    if (label !== undefined) {
      count = Easychat.safeParseInt(label.textContent);
    }

    // set Easychat badge
    Easychat.setBadge(count);
  };

  document.addEventListener('click', e => {
    const { tagName, target, href } = e.target;

    if (tagName === 'A' && target === '_blank') {
      e.preventDefault();
      e.stopImmediatePropagation();
      window.open(href);
    }
  });

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
