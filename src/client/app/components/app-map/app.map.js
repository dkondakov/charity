import angular from 'angular';
import appMapComponent from './app.map.component';

import './app.map.scss';

const appMapModule = angular.module('appMap', [])
	.component('appMap', appMapComponent);

export default appMapModule;