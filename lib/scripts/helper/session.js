import getUser from '../call/getUser.js';

const getPublicId = () =>
  window && window.hasOwnProperty('GroupsConfig')
    ? window.GroupsConfig.id.replace(/-/g, '')
    : undefined;

const getCookies = () => document.cookie.replace(/\s+/g, '').split(';');

const getCookie = (key) => {
  let cookies = getCookies();
  let cookieExists = cookies.filter(cookie =>
		cookie.indexOf(key) >= 0
  ).length;
  if (cookieExists) {
		// Get value from the related cookie
    let value;
		for(let cookie of cookies) {
			let data = cookie.split('=');
			value = data[0] === key ? data[1] : undefined;
		}
    return value;
  } else {
    return false;
  }
}

const startSession = (id) => {
  let key = getPublicId();
  let expiry = new Date();
  expiry.setTime(expiry.getTime() + (10 * 60 * 1000));
  document.cookie = 'groups_' + key + '_id=' + id + '; path=/; expires=' + expiry.toGMTString();
  document.cookie = 'groups_' + key + '_session_off=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

const getSession = (callback) => {
  let key = getPublicId();
  let id = getCookie('groups_' + key + '_id=');
  let response;
  if(id) {
    // Respond positively
    callback({
			"success": true,
			"id": id
		});
  } else {
    // Check if session is marked as "off"
    let sessionIsOff = getCookie('groups_' + key + '_session_off=');
    if(sessionIsOff) {
      // Respond negatively
      callback({
        "success": false,
        "reason": "No active session"
      });
    } else {
      // Check for session on server
      getUser(response => {
				if(response.success) {
					// Start session
					startSession();
				} else {
					// End session
          endSession();
				}
				// Respond with new session information
				callback(response);
			});
    }
  }
}

const endSession = () => {
  let key = getPublicId();
  document.cookie = 'groups_' + key + '_id=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  document.cookie = 'groups_' + key + '_session_off=true; path=/;';
}

export {
	getPublicId,
	getCookies,
	getCookie,
	startSession,
  getSession,
  endSession
};