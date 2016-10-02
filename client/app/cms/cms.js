import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cmsComponent from './cms.component';

import settingsModule from './settings/settings';

let cmsModule = angular
  .module('cms', [
    uiRouter,

    settingsModule
  ])
  .config(function($stateProvider) {
    'ngInject'

    $stateProvider
      .state('cms', {
        url: '/cms',
        component: 'cms'
          // views: {
          //   "content": {
          //     component: 'cms'
          //   }
          // }
      })
  })
  .component('cms', cmsComponent)
  .name;

export default cmsModule;

