import template from './dashboard.pug';
import controller from './dashboard.controller';
import './dashboard.styl';

let dashboardComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default dashboardComponent;
