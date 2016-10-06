import angular from 'angular';
import uiRouter from 'angular-ui-router';
import pagesComponent from './pages.component';

let pagesModule = angular.module('pages', [
  uiRouter
])

.config(function($stateProvider) {
    'ngInject'

    $stateProvider
      .state('cms.pages', {
        url: '/pages',
        component: 'pages'
         
      })
  })

.component('pages', pagesComponent)

.name;

export default pagesModule;
