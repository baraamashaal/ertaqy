import angular from 'angular';
import uiRouter from 'angular-ui-router';
import settingsComponent from './settings.component';

import general from './general/general';
let settingsModule = angular
  .module('app.cms.settings', [
    uiRouter,
    general
  ])
  .config(function($stateProvider) {
    'ngInject'

    $stateProvider
      .state('cms.settings', {
        abstract: true,
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

