import angular from 'angular';
import uiRouter from 'angular-ui-router';
import siteComponent from './site.component';

export default angular.module('site', [
    uiRouter
  ])
  .config(function ($stateProvider) {
    'ngInject'
    $stateProvider
      .state('cms.site', {
        url: '/site',
        component: 'site'
      })
  })
  .component('site', siteComponent)
  .name;

