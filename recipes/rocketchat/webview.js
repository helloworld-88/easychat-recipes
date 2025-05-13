function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const title = document.querySelector('title');
    const matches = title.textContent.match(/^\((\S*?)\)/);

    if (matches) {
      const count = Easychat.safeParseInt(matches[1], 10);
      if (count) {
        Easychat.setBadge(count);
      } else {
        Easychat.setBadge(0, 1);
      }
    } else {
      Easychat.setBadge(0);
    }
  };

  Easychat.loop(getMessages);

  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));

  const getTeamIcon = function getTeamIcon() {
    const manifestElement = document.querySelector('link[rel="manifest"]');

    if (manifestElement === null) {
      return;
    }

    const manifestUrl = manifestElement.getAttribute('href');

    if (manifestUrl === null) {
      return;
    }

    const xmlhttp = new XMLHttpRequest();

    xmlhttp.addEventListener('readystatechange', function () {
      if (this.readyState !== 4 || this.status !== 200) {
        return;
      }

      const response = JSON.parse(this.responseText);

      if (response.icons.length > 0) {
        Easychat.setAvatarImage(
          `${window.location.protocol}//${window.location.host}${response.icons[0].src}`,
        );
      }
    });

    xmlhttp.open('GET', manifestUrl, true);
    xmlhttp.send();
  };

  setTimeout(() => {
    getTeamIcon();
  }, 4000);
};
