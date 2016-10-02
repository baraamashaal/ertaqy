import template from './cms.pug';
import controller from './cms.controller';
import './cms.styl';

let cmsComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default cmsComponent;
