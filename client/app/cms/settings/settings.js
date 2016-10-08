import angular from 'angular';
import uiRouter from 'angular-ui-router';
import settingsComponent from './settings.component';

export default angular.module('cms.settings', [
    uiRouter
  ])
  .config(function ($stateProvider) {
    'ngInject'
    $stateProvider
      .state('cms.settings', {
        url: '/settings',
        component: 'cmsSettings',
        data: {
          appbarTabs: true
        }
      })
  })
  .component('cmsSettings', settingsComponent)
  .name;

