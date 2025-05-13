function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

const reload = EventType =>
  new Promise((resolve, reject) => {
    const btn = document.querySelectorAll('.giraffe-hierarchy-node-refresh')[0];
    const EventObject = document.createEvent('Events');
    EventObject.initEvent(EventType, true, false);

    if (btn.dispatchEvent(EventObject)) {
      resolve();
    } else {
      reject();
    }
  });

module.exports = Easychat => {
  const getUnread = () => {
    const nodes = document.querySelectorAll('.giraffe-hierarchy-node-counter');
    let counter = 0;

    for (const node of nodes) {
      counter += Easychat.safeParseInt(node.textContent);
    }

    Easychat.setBadge(counter);
  };

  if (!window.location.pathname.includes('auth')) {
    Easychat.loop(getUnread);

    window.setInterval(() => {
      reload('click');
    }, 60_000);
  }

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
