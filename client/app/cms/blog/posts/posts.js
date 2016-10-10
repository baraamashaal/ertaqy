import angular from 'angular';
import uiRouter from 'angular-ui-router';

import lodash from 'lodash';
import angularSanitize from 'angular-sanitize';
import mdDataTableTmpls from 'md-data-table/dist/md-data-table-templates';
import 'md-data-table/dist/md-data-table-style.css';
import mdDataTable from 'md-data-table';

import postsComponent from './posts.component';

import postsFactory from './posts.factory';

export default angular.module('app.cms.blog.posts', [
    uiRouter,
    angularSanitize,
    mdDataTable
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
  .factory('POSTS', postsFactory)
  .name;

