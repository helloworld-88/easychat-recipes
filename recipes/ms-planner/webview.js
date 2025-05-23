const path = require('path');

setTimeout(() => {
  const elem = document.querySelector('.landing-title.version-title');
  if (elem && elem.textContent.toLowerCase().includes('google chrome')) {
    window.EasychatAPI.clearCache();
    window.location.reload();
  }
}, 1000);

const isMutedIcon = element =>
  element.parentElement.parentElement.querySelectorAll('*[data-icon="muted"]')
    .length > 0;

const isPinnedIcon = element => element.classList.contains('_1EFSv');

module.exports = Easychat => {
  const getMessages = function getMessages() {
    const elements = document.querySelectorAll(
      '.CxUIE, .unread, ._0LqQ, .m61XR .ZKn2B, .VOr2j, ._1V5O7 ._2vfYK, html[dir] ._23LrM, ._1pJ9J:not(._2XH9R)',
    );
    let count = 0;

    for (const element of elements) {
      try {
        // originalLog(isMutedIcon(elements[i]), isPinnedIcon(elements[i]));
        if (!isMutedIcon(element) && !isPinnedIcon(element)) {
          count += 1;
        }
      } catch {
        // nope;
      }
    }

    Easychat.setBadge(count);
  };

  Easychat.injectCSS(path.join(__dirname, 'service.css'));
  Easychat.loop(getMessages);
};
