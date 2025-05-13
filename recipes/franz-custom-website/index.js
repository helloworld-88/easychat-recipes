module.exports = Easychat =>
  class CustomWebsite extends Easychat {
    async validateUrl() {
      return true;
    }
  };
