module.exports = Easychat => {
  class Mastodon extends Easychat {
    validateServer(URL) {
      const api = `${URL}`;
      return new Promise((resolve, reject) => {
        $.get(api, () => {
          resolve();
        }).fail(reject);
      });
    }
  }

  return Mastodon;
};
