function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  // With `// Legacy ` are marked those selectors that were working for some
  // Nextcloud version before 27 (24 or 25).
  const notificationElement = '.notification-wrapper .notification';
  const getMessages = () => {
    Easychat.setBadge(
      Easychat.safeParseInt(
        document.querySelectorAll(
          `.notifications ${notificationElement}[object_type="dav"], ` + // Legacy
            `.notification-container ${notificationElement}[data-app="dav"]`, // Nextcloud 27
        )?.length,
      ),
    );
  };
  Easychat.loop(getMessages);
  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
