function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const newsDOM = document.querySelectorAll(
      "div[title='All'] > .LeftnavListRow__count",
    );

    let counter = 0;

    if (newsDOM && newsDOM.length > 0) {
      const { textContent } = newsDOM[0];

      counter =
        textContent.includes('K') || textContent.includes('+')
          ? `${textContent.slice(0, Math.max(0, textContent.indexOf('K')))}000`
          : Easychat.safeParseInt(textContent);
    }

    Easychat.setBadge(counter);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
