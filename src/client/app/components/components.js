import angular from 'angular';
import AppMap from './app-map/app.map';

let componentsModule = angular.module('components', [AppMap.name]);

export default componentsModule;