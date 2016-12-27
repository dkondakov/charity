import leaflet from 'leaflet';
import config from '../../config';

'use strict';

class AppMapController {
  constructor() {
    const $ctrl = this;
    
	$ctrl.myMap = leaflet
		.map(config.map.ID)
		.setView(config.map.view.INIT_POS, config.map.view.INIT_ZOOM);
  
	leaflet.tileLayer(config.tileLayer.URL, {
	  maxZoom: config.tileLayer.MAX_ZOOM,
	  attribution: config.tileLayer.ATTR,
	  id: config.tileLayer.ID
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