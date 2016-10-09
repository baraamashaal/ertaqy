import BlogModule from './blog'
import BlogController from './blog.controller';
import BlogComponent from './blog.component';
import BlogTemplate from './blog.html';

describe('Blog', () => {
  let $rootScope, makeController;

  beforeEach(window.module(BlogModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new BlogController();
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
      expect(BlogTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = BlogComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(BlogTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(BlogController);
      });
  });
});
