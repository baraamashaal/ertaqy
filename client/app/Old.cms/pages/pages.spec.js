import PagesModule from './pages'
import PagesController from './pages.controller';
import PagesComponent from './pages.component';
import PagesTemplate from './pages.html';

describe('Pages', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PagesModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PagesController();
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
      expect(PagesTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PagesComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PagesTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PagesController);
      });
  });
});
