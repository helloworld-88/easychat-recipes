// Monkey patch ServiceWorker.postMessage so that it will actually post a notification in Easychat:

function newPostMessage(options) {
  window.easychat.displayNotification(options.title, options);
}

ServiceWorker.prototype.postMessage = newPostMessage;
