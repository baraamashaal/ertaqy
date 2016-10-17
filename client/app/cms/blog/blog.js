import angular from 'angular';
import uiRouter from 'angular-ui-router';
import blogComponent from './blog.component';

import postsModule from './posts/posts';

export default angular.module('app.cms.blog', [
    uiRouter,

    postsModule
  ])
  .config(function ($stateProvider) {
    'ngInject'
    $stateProvider
      .state('cms.blog', {
        url: '/blog',
        abstract: true,
        views: {
          'cms@cms': {
            component: 'blog',
          }
        }
      })
  })
  .component('blog', blogComponent)
  .name;

