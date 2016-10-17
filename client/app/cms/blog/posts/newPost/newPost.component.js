import template from './newPost.pug';
import controller from './newPost.controller';
import './newPost.styl';

let newPostComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default newPostComponent;
