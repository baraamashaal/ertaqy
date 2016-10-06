import angular from 'angular';
import uiRouter from 'angular-ui-router';
import cmsComponent from './cms.component';

export default angular.module('cms', [
    uiRouter,
  ])
  .config(function ($stateProvider) {
    'ngInject'

    $stateProvider
      .state('cms', {
        url: '/cms',
        component: 'cms'
      })
  })
  .component('cms', cmsComponent)
  .name;

