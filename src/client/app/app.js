import angular from 'angular';
import Components from './components/components';
import AppComponent from './app.component';

import './app.scss';

angular.module('app', [Components.name])
	.component('app', AppComponent);