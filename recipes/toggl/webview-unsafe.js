// only try to update badge once Easychat API has finished loading
if (window.easychat !== undefined && window.easychat.setBadge !== undefined) {
  const timerRunning =
    window.toggl !== undefined &&
    !!window.toggl.store.getState().view.timer.timeEntry.start;

  // Treat running timer as a "non-direct" notification (default blue dot instead of urgent red "1")
  window.easychat.setBadge(0, timerRunning ? 1 : 0);
}
