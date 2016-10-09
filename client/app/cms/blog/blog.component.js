import template from './blog.pug';
import controller from './blog.controller';
import './blog.styl';

let blogComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default blogComponent;
