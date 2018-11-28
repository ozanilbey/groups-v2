import apiCall from '../helper/call.js';
import {startSession} from '../helper/session.js';

function loginCall(args, callback) {
	apiCall("login", {
		"username": args[0],
		"password": args[1]
	},
	function(response) {
		if(response.data.success) {
			startSession(response.data.id);
			window.Groups.events.emit("afterLogin", args);
		}
		callback(response.data);
	}, false);
};

export default function() {
	let args = Array.from(arguments);
	let callback = args.pop();
	loginCall(args, callback);
};
