import angular from 'angular';
import uiRouter from 'angular-ui-router';
import newPostComponent from './newPost.component';



export default angular.module('newPost', [
    uiRouter
  ])
  .component('newPost', newPostComponent)
  .config(function ($stateProvider) {
    'ngInject'
    $stateProvider
      .state('cms.blog.posts.add', {
        url: '/newPost',
        // component: 'newPost',
        'views': {
          'blog@cms.blog': {
            component: 'newPost'
          }
        }
      })
  })
  .name;

