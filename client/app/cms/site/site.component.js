import template from './site.pug';
import controller from './site.controller';
import './site.styl';

let siteComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default siteComponent;
