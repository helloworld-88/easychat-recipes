function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const all_articles = document.querySelector('#unread_cnt_all_items');
    if (!all_articles) return;

    const unread_articles_cnt = Number(all_articles.textContent.split('+')[0]);
    Easychat.setBadge(unread_articles_cnt);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
