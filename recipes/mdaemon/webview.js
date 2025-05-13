function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  function getMessages() {
    let direct = 0;
    let indirect = 0;
    const EasychatData = document.querySelector('#EasychatMessages').dataset;
    if (EasychatData) {
      direct = EasychatData.direct;
      indirect = EasychatData.indirect;
    }

    Easychat.setBadge(direct, indirect);
  }

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
  Easychat.loop(getMessages);
};
