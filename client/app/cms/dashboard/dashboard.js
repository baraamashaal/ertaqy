import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cmsDashboardComponent from './dashboard.component';

export default angular.module('app.cms.dashboard', [
    uiRouter
  ])
  .config(function ($stateProvider) {
    'ngInject'
    $stateProvider
      .state('cms.dashboard', {
        url: '',
        component: 'cmsDashboard'
      })
  })
  .component('cmsDashboard', cmsDashboardComponent)
  .name;

