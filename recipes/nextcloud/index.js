module.exports = Easychat =>
  class Nextcloud extends Easychat {
    buildUrl(url) {
      return `${url}/`;
    }
  };
