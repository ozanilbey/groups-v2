import apiCall from '../helper/call.js';
import {endSession} from '../helper/session.js';

function logoutCall(callback) {
	apiCall("logout", {},
	function(response) {
		if(response.data.success) {
			endSession();
			window.Groups.events.emit("afterLogout");
		}
		callback(response.data);
	}, false);
};

export default function(callback) {
	logoutCall(callback);
};