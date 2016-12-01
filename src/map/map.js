import angular from 'angular';
import leaflet from 'leaflet';

import '../style/map.css';

let map = () => {
  return {
	template: require('./map.html'),
	controller: 'MapCtrl',
	controllerAs: 'map'
  }
};

class MapCtrl {
  constructor() {
	this.url = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?' +
		'access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw';
	this.mymap = leaflet.map('mapid').setView([51.505, -0.09], 13);
  
	leaflet.marker([51.5, -0.09])
		.addTo(mymap)
		.bindPopup("<b>Hello world!</b><br />I am a popup.")
		.openPopup();
  
	leaflet.circle([51.508, -0.11], 500, {
	  color: 'red',
	  fillColor: '#f03',
	  fillOpacity: 0.5
	})
		.addTo(mymap)
		.bindPopup("I am a circle.");
  
	leaflet.polygon([
	  [51.509, -0.08],
	  [51.503, -0.06],
	  [51.51, -0.047]
	])
		.addTo(mymap)
		.bindPopup("I am a polygon.");
  
	this.popup = leaflet.popup();
  
	function onMapClick(e) {
	  this.popup
		  .setLatLng(e.latlng)
		  .setContent("You clicked the map at " + e.latlng.toString())
		  .openOn(mymap);
	}
  
	this.mymap.on('click', onMapClick);
  }
	
}

const MODULE_NAME = 'map';

angular.module(MODULE_NAME, [])
	.directive('map', map)
	.controller('MapCtrl', MapCtrl);

export default MODULE_NAME;