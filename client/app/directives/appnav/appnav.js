import template from './appnav.pug';
import controller from './appnav.controller.js';
import './appnav.styl';


export default function () {
  return {
    template,
    controller,
    controllerAs: 'appnav',
    restract: 'E',
    replace: true
  }
}

