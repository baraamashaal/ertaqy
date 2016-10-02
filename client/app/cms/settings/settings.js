import angular from 'angular';
import uiRouter from 'angular-ui-router';
import settingsComponent from './settings.component';

let settingsModule = angular
  .module('settings', [
    uiRouter
  ])
  .config(function($stateProvider) {
    'ngInject'

    $stateProvider
      .state('cms.settings', {
        url: '/settings',
        component: 'settings'
          // views: {
          //   "content@cms": {
          //     component: 'settings'
          //   }
          // }
      })
  })
  .component('settings', settingsComponent)
  .name;

export default settingsModule;

