import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardComponent from './dashboard.component';

let dashboardModule = angular.module('app.dashboard', [
  uiRouter
])

.config(function($stateProvider) {
  'ngInject'

  $stateProvider
    .state('dashboard', {
      url: '/',
      component: 'dashboard'
    })
})

.component('dashboard', dashboardComponent)

.name;

export default dashboardModule;

