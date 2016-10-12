import template from './posts.pug';
import controller from './posts.controller';
import './posts.styl';

let postsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  // controllerAs: '$posts'
};

export default postsComponent;

