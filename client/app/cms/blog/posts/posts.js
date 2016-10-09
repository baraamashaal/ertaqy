import angular from 'angular';
import uiRouter from 'angular-ui-router';
import postsComponent from './posts.component';

export default angular.module('app.cms.blog.posts', [
    uiRouter
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
  .name;

