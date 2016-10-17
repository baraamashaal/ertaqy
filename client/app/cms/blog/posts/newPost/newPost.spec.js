import NewPostModule from './newPost'
import NewPostController from './newPost.controller';
import NewPostComponent from './newPost.component';
import NewPostTemplate from './newPost.html';

describe('NewPost', () => {
  let $rootScope, makeController;

  beforeEach(window.module(NewPostModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new NewPostController();
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
      expect(NewPostTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = NewPostComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(NewPostTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(NewPostController);
      });
  });
});
