const config = {
  map: {
    ID: 'map-id',
    view: {
	  INIT_POS: [50.44943, 30.53],
	  INIT_ZOOM: 13
    }
  },
  tileLayer: {
	URL: 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=' +
	'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw',
	ATTR: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
	'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
	'Imagery © <a href="http://mapbox.com">Mapbox</a>',
    ID: 'mapbox.streets',
    MAX_ZOOM: 18
  }
};

export default config;