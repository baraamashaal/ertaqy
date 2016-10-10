import angular from 'angular';
import uiRouter from 'angular-ui-router';
import generalComponent from './general.component';

// import 'angular-material-data-table/dist/md-data-table.min.css';

export default angular.module('app.cms.settings.general', [
    uiRouter,
  ])
  .config(function ($stateProvider) {
    'ngInject'
    $stateProvider
      .state('cms.settings.general', {
        url: '',
        component: 'cmsGeneralSettings',
      })
  })
  .component('cmsGeneralSettings', generalComponent)
  .name;

