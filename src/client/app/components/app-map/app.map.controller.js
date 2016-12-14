import leaflet from 'leaflet';
import config from '../../config';

'use strict';

class AppMapController {
  constructor() {
    const $ctrl = this;
    
	$ctrl.myMap = leaflet
		.map(config.MAP_ID)
		.setView(config.MAP_INIT_POS, config.MAP_INIT_ZOOM);
  
	leaflet.tileLayer(config.MAP_URL, {
	  maxZoom: 18,
	  attribution: config.MAP_ATTR,
	  id: 'mapbox.streets'
	}).addTo($ctrl.myMap);
	
	$ctrl.myMap.on('click', addMarker);
	
	function addMarker(e){
	  if (confirm('Would you like to add marker here?')) {
	    let description = prompt('Please add description here!') || e.latlng;
	  
		leaflet.marker(e.latlng)
			.addTo($ctrl.myMap)
			.bindPopup(`<b>${description}</b><br />`)
			.openPopup();
	  }
	}
  }
}

export default AppMapController;