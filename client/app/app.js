import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngMaterial from 'angular-material';
// import Common from './common/common';
// import Components from './components/components';

import appComponent from './app.component';

import 'angular-material/angular-material.css';

let appModule = angular.module('app', [
  uiRouter,
  ngMaterial,
  // Common,
  // Components
]).config(($locationProvider) => {
  "ngInject";
  // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
  // #how-to-configure-your-server-to-work-with-html5mode
  $locationProvider.html5Mode(false).hashPrefix('!');
}).component('app', appComponent).name;

export default appModule;

