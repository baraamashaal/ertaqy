import angular from 'angular';
import uiRouter from 'angular-ui-router';
import angularResource from 'angular-resource';
import angularMaterialDataTable from 'angular-material-data-table';
import 'angular-material-data-table/dist/md-data-table.css';

import postsComponent from './posts.component';
import postsFactory from './posts.factory';

export default angular.module('app.cms.blog.posts', [
    uiRouter,
    angularResource,
    angularMaterialDataTable,
  ])
  .config(function ($stateProvider) {
    'ngInject'
    $stateProvider
      .state('cms.blog.posts', {
        url: '/posts',
        component: 'posts',
      })
  })
  .component('posts', postsComponent)
  .factory('$posts', postsFactory)
  .name;

