import angular from 'angular';
import leaflet from 'leaflet';

angular.
	module('mapModule').
	component('mapComponent', {
	  templateUrl: './map.template.html',
	  controller: function MapController() {
		this.url = 'http://google.com';
		let myMap = leaflet.map('mapid').setView([51.505, -0.09], 13);
	  
		leaflet.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' +
			'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
		  maxZoom: 18,
		  attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
		  '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
		  'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		  id: 'mapbox.streets'
		}).addTo(myMap);
	  
		leaflet.marker([51.5, -0.09])
			.addTo(myMap)
			.bindPopup("<b>Hello world!</b><br />I am a popup.")
			.openPopup();
	  
		leaflet.circle([51.508, -0.11], 500, {
		  color: 'red',
		  fillColor: '#f03',
		  fillOpacity: 0.5
		})
			.addTo(myMap)
			.bindPopup("I am a circle.");
	  
		leaflet.polygon([
		  [51.509, -0.08],
		  [51.503, -0.06],
		  [51.51, -0.047]
		])
			.addTo(myMap)
			.bindPopup("I am a polygon.");
	  
		let popup = leaflet.popup();
	  
		function onMapClick(e) {
		  popup
			  .setLatLng(e.latlng)
			  .setContent(`You clicked the map at ${e.latlng.toString()}. \n Would you like to add marker here?`)
			  .openOn(myMap);
		}
	  
		myMap.on('click', onMapClick);
	  }
	});