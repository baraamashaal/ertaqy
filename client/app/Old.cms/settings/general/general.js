import angular from 'angular';
import uiRouter from 'angular-ui-router';
import generalComponent from './general.component';

let generalModule = angular
.module('app.cms.general.general', [
  uiRouter
])
.config(function($stateProvider) {
    'ngInject'

    $stateProvider
      .state('cms.settings.general', {
        url: '',
        component: 'general'
          // views: {
          //   "content@cms": {
          //     component: 'settings'
          //   }
          // }
      })
  })
.component('general', generalComponent)
.name;

export default generalModule;
