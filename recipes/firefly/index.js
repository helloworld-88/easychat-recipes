module.exports = Easychat =>
  class Firefly extends Easychat {
    buildUrl(url) {
      return `${url}/`;
    }
  };
