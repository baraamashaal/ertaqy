import angular from 'angular';
import uiRouter from 'angular-ui-router';
import 'tv4';
import angularSanitize from 'angular-sanitize';
import schemaForm from 'angular-schema-form';
import angularMessages from 'angular-messages';
import 'angular-schema-form-material';


import newPostComponent from './newPost.component';

export default angular.module('app.cms.blog.add', [
    uiRouter,
    schemaForm.name,
    angularSanitize,
    angularMessages
  ])
  .config(function ($stateProvider) {
    'ngInject';
    $stateProvider
      .state('cms.blog.posts.add', {
        url: '/new-post',
        views: {
          'blog@cms.blog': {
            component: 'newPost'
          }
        }
      })
  })
  .component('newPost', newPostComponent)
  .name;

