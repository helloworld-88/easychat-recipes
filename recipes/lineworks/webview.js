function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const elements = document.querySelectorAll(
      'div#chat_list > ul#chat_grp_lst > li#item_chat > dl#chat_count > span#new',
    );
    let count = elements[0]
      ? (count = Easychat.safeParseInt(elements[0].textContent))
      : 0;

    Easychat.setBadge(count);
  };
  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
