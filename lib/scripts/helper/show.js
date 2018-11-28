import {showOverlay, capitalize} from './client.js';

const show = (name, specs) => {
	// Set tag name
	let tagName = 'groups-' + name;
	// Set hook name
	let hookName = 'Show';
	name.split('-').forEach(word =>
		hookName += capitalize(word)
	);
	const beforeEventsExist = Object.keys(window.Groups.events.events).indexOf("before"+hookName) != -1;
	if(beforeEventsExist){
		window.Groups.events.emit('before' + hookName, specs, (goToNextStep = true) => {
			if(goToNextStep){
				showOverlay(tagName, specs);
				window.Groups.events.emit('after' + hookName, specs);
			}
		});
	} else {
		showOverlay(tagName, specs);
		window.Groups.events.emit('after' + hookName, specs);
	}
}

export default show;