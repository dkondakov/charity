import angular from 'angular';
import './map/map.module';

import './app.css';

angular
	.module('app', ['mapModule'])
	.directive('app', function() {
	  return {
		templateUrl: './app.template.html'
	  };
	});