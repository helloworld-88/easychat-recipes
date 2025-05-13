function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const count = {};
    const data = document.querySelector('#FranzMessages').dataset;
    if (data) {
      count.count = data.direct;
      count.count_indirect = data.indirect;
    }

    Easychat.setBadge(count);
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
