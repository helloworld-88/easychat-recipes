module.exports = Easychat =>
  class Grammarly extends Easychat {
    async validateUrl() {
      return true;
    }
  };
