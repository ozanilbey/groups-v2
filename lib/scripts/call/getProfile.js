import apiCall from '../helper/call.js';

function getProfileCall(args, callback) {
	apiCall("getProfile", {
		"id": args[0]
	},
	function(response) {
		callback(response.data);
	});
};

export default function() {
	let args = Array.from(arguments);
	let callback = args.pop();
	getProfileCall(args, callback);
};