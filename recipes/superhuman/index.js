module.exports = Easychat =>
  class SuperHuman extends Easychat {
    overrideUserAgent() {
      // TODO: Rather than hardcoding like this, the user should set it for their individual installation of Easychat
      return 'Mozilla/5.0 (Windows NT 10.0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/42.0.2311.135 Safari/537.36 Edge/12.10136';
    }
  };
