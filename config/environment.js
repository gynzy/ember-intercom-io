'use strict';

module.exports = function (/* environment, appConfig */) {
  return {
    intercom: {
      appId: process.env.INTERCOM_APP_ID | null,
      languageOverride: process.env.INTERCOM_LANGUAGE_OVERRIDE | null,
      unreadCount: process.env.INTERCOM_UNREAD_COUNT | null,
      isOpen: process.env.INTERCOM_IS_OPEN | null,
      userProperties: {
        createdAtProp: 'createdAt',
        emailProp: 'email',
        nameProp: 'name',
        userHashProp: 'hash',
        userIdProp: 'id'
      }
    }
  };
};
