import apiCall from '../helper/call.js';

function getUserCall(callback) {
	apiCall("whoami", {},
	function(response) {
		callback(response.data);
	});
};

export default function(callback) {
	getUserCall(callback);
};