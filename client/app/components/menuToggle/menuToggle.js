import angular from 'angular';
import uiRouter from 'angular-ui-router';
import menuToggleComponent from './menuToggle.component';

let menuToggleModule = angular.module('menuToggle', [
  uiRouter
])

.component('menuToggle', menuToggleComponent)

.name;

export default menuToggleModule;
