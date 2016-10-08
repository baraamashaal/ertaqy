import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
// import Common from './common/common';
// import Components from './components/components';


import dashboardModule from './dashboard/dashboard';
import cmsModule from './cms/cms';

import appnavDirective from './directives/appnav/appnav';
import appbarDirective from './directives/appbar/appbar';
import 'angular-material/angular-material.css';

import appComponent from './app.component';

let appModule = angular
  .module('app', [
    uiRouter,
    ngMaterial,
    // Common,
    // Components
    dashboardModule,
    cmsModule

  ])
  .config(($locationProvider, $stateProvider, $urlRouterProvider, $mdThemingProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(false).hashPrefix('!');

    $urlRouterProvider.otherwise('/');

    $mdThemingProvider.theme('default')
      .primaryPalette('teal')
      .accentPalette('pink');
    // $mdThemingProvider.theme('default').dark();
  })
  .component('app', appComponent)
  .directive('appNav', appnavDirective)
  .directive('appBar', appbarDirective)
  .name;

export default appModule;

