module.exports = Easychat =>
  class ProtonPass extends Easychat {
    overrideUserAgent() {
      return 'Mozilla/5.0 (X11; Linux x86_64; rv:124.0) Gecko/20100101 Firefox/124.0';
    }
  };
