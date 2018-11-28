import riot from 'riot';

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);

const downsizeImage = (path, width) => {
	// Check if the source is Cloudinary
	if(path.includes('cloudinary.com')) {
		// Inject transformation rules
		return path.replace('/upload/', '/upload/c_limit,w_' + width + '/');
	} else {
		return path;
	}
};

const showOverlay = (tagName, specs) => {
    // Remove previous overlay
    hideOverlay();
    // Create new overlay
    let newOverlayItem = document.createElement('groups-overlay');
    // Set component property on overlay
    let component = document.createAttribute('component');
    component.value = tagName;
    newOverlayItem.setAttributeNode(component);
    // Set specs of component on overlay
    if(specs) {
        for(let key of Object.keys(specs)) {
            let attribute = document.createAttribute(key);
            attribute.value = specs[key];
            newOverlayItem.setAttributeNode(attribute);
        }
    }
    // Mount & append overlay
    riot.mount(newOverlayItem);
    document.body.appendChild(newOverlayItem);
}

const hideOverlay = () => {
  // Remove previous overlay
  let previousOverlayItem = document.querySelector('groups-overlay');
  previousOverlayItem && previousOverlayItem.parentNode.removeChild(previousOverlayItem);
  document.body.style.overflow = 'auto';
}

export {
	capitalize,
	downsizeImage,
	showOverlay,
	hideOverlay
};