// Wait for Easychat to initialize
if (window.easychat?.setBadge !== undefined) {
  window.easychat.setBadge(
    window.easychat.safeParseInt(window.zmfolAction?.getUnreadViewCount()) +
      window.easychat.safeParseInt(
        document.querySelector('#wms_menu_unreadchats_cnt')?.textContent,
      ),
    window.easychat.safeParseInt(
      window.zmTopBar?.topBandElements()?.notification?.children
        ?.notificationBadge?.textContent,
    ),
  );
}
