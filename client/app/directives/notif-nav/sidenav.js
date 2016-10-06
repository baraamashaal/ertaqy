import template from './sidenav.pug';
import controller from './sidenav.controller.js';
import './sidenav.styl';


export default function() {
  return {
    template,
    controller,
    controllerAs: 'sidenav',
    restract: 'E',
    replace: true
  }
}

