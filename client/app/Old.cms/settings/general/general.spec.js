import GeneralModule from './general'
import GeneralController from './general.controller';
import GeneralComponent from './general.component';
import GeneralTemplate from './general.html';

describe('General', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GeneralModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GeneralController();
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
      expect(GeneralTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = GeneralComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(GeneralTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GeneralController);
      });
  });
});
