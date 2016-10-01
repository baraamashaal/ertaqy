import template from './<%= name %>.pug';
import controller from './<%= name %>.controller';
import './<%= name %>.styl';

let <%= name %>Component = {
  restrict: 'E',
  bindings: {},
  template,
  controller
};

export default <%= name %>Component;
