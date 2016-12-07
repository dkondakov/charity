import angular from 'angular';
import './app-map/app.map.module';

import './app.css';

angular
	.module('app', ['appMap'])
	.directive('app', function() {
	  return {
		templateUrl: './app.template.html'
	  };
	});