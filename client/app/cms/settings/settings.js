import angular from 'angular';
import uiRouter from 'angular-ui-router';
import settingsComponent from './settings.component';

import generalModule from './general/general';

export default angular.module('cms.settings', [
    uiRouter,
    generalModule
  ])
  .config(function ($stateProvider) {
    'ngInject'
    $stateProvider
      .state('cms.settings', {
        url: '/settings',
        component: 'cmsSettings',
        abstract: true
      })
  })
  .component('cmsSettings', settingsComponent)
  .name;

