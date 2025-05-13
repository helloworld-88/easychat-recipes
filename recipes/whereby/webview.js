function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Easychat => {
  const getMessages = () => {
    const elements = document.querySelectorAll('.CxUIE, .unread');
    let count = 0;

    for (const element of elements) {
      if (element.querySelectorAll('*[data-icon="muted"]').length === 0) {
        count += 1;
      }
    }

    // set Easychat badge
    Easychat.setBadge(count);
  };

  // check for new messages every second and update Easychat badge
  Easychat.loop(getMessages);

  // inject Easychat.css stylesheet
  Easychat.injectCSS(_path.default.join(__dirname, 'service.css'));
};
