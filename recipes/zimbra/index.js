module.exports = Easychat =>
  class Zimbra extends Easychat {
    async validateUrl() {
      return true;
    }
  };
