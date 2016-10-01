import MenuToggleModule from './menuToggle'
import MenuToggleController from './menuToggle.controller';
import MenuToggleComponent from './menuToggle.component';
import MenuToggleTemplate from './menuToggle.html';

describe('MenuToggle', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MenuToggleModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MenuToggleController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(MenuToggleTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MenuToggleComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MenuToggleTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MenuToggleController);
      });
  });
});
