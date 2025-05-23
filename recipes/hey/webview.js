function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    if (document.location.href === 'https://app.hey.com/') {
      let screener = 0;
      let unread = 0;

      if (document.querySelectorAll('.btn--icon-screener').length > 0) {
        const text = document.querySelectorAll('.btn--icon-screener')[0]
          .textContent;
        if (text) {
          const parsedText = Easychat.safeParseInt(/\d+/.exec(text));
          screener = parsedText[0];
        }
      }

      const postings = document.querySelectorAll('.posting');

      if (postings.length > 0) {
        for (const p of postings) {
          if (p.nodeName === 'ARTICLE' && p.dataset.seen !== 'true') {
            unread += 1;
          }
        }
      }

      Easychat.setBadge(unread, screener);
    }
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
