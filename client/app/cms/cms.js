import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cmsComponent from './cms.component';

import cmsDashboardModule from './dashboard/dashboard';
import cmsSiteModule from './site/site';
import cmsSettingsModule from './settings/settings';
import cmsBlogModule from './blog/blog';

export default angular.module('app.cms', [
    uiRouter,

    cmsDashboardModule,
    cmsSiteModule,
    cmsSettingsModule,
    cmsBlogModule
  ])
  .config(function ($stateProvider) {
    'ngInject'

    $stateProvider
      .state('cms', {
        abstract: true,
        url: '/cms',
        component: 'cms'
      })
  })
  .component('cms', cmsComponent)
  .name;

