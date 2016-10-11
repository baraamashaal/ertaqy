import newRecordController from './newRecord/newRecord.controller';
import newRecordTemplate from './newRecord/newRecord.pug';

// // import postsNewRecordController from "./newRecord/newRecord.controller";
// // import postsNewRecordTemplate from "./newRecord/newRecord.pug";
// // export default class PostsController {
// //   constructor($mdColors, POSTS) {
// //     'ngInject'



// //     this.$mdColors = $mdColors
// //     this.name = 'posts';
// //     this.selectedRows = [];
// //     this.isEmptyRows = true;
// //     this.POSTS = POSTS;


// //     // console.log('POSTS', POSTS);
// //     this.getPosts()
// //   }

// //   isSelectedRows() {
// //     return this.selectedRows && this.selectedRows.length
// //   }

// //   getPosts() {
// //     let that = this;
// //     this.POSTS.get().then(function (res) {
// //       that.posts = res.data
// //     }, function (error) {

// //     });
// //   }
// // };

// export default class PostsController {
//   constructor($scope, $mdDialog, $posts) {
//     'ngInject';

//     this.$mdDialog = $mdDialog;

//     this.name = 'cms posts';
//     this.selectedRecoreds = [];
//     this.$posts = $posts;
//     this.query = {
//       filter: '',
//       limit: '5',
//       order: 'nameToLower',
//       page: 1
//     }

//     this.filter = {
//       options: {
//         debounce: 500
//       }
//     };
//     console.log('this', this);

//   }

//   getPosts() {
//     console.log('this.$posts', this);
//     // this.promise = this.$posts.desserts.get(this.query, success).$promise;
//   }

//   onSuccess(posts) {
//     this.posts = posts
//   }

//   // newRecord() {
//   //   this.$mdDialog.show({
//   //     clickOutsideToClose: true,
//   //     controller: postsNewRecordController,
//   //     focusOnOpen: false,
//   //     targetEvent: event,
//   //     template: postsNewRecordTemplate
//   //   }).then(this.getPosts);
//   // }





// }

export default function ($mdDialog, $nutrition, $scope) {
  'ngInject'

  var bookmark;

  $scope.selected = [];

  $scope.filter = {
    options: {
      debounce: 500
    }
  };

  $scope.query = {
    filter: '',
    _limit: '5',
    order: 'nameToLower',
    _page: 1
  };

  function success(desserts) {
    $scope.desserts = desserts;
  }

  $scope.addItem = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'newRecordController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      template: newRecordTemplate,
    }).then($scope.getDesserts);
  };

  $scope.delete = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: 'newRecordController',
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      locals: { desserts: $scope.selected },
      template: newRecordTemplate,
    }).then($scope.getDesserts);
  };

  $scope.getDesserts = function () {
    $scope.promise = $nutrition.desserts.query($scope.query, success).$promise;
  };

  $scope.removeFilter = function () {
    $scope.filter.show = false;
    $scope.query.filter = '';

    if ($scope.filter.form.$dirty) {
      $scope.filter.form.$setPristine();
    }
  };

  $scope.$watch('query.filter', function (newValue, oldValue) {
    if (!oldValue) {
      bookmark = $scope.query._page;
    }

    if (newValue !== oldValue) {
      $scope.query._page = 1;
    }

    if (!newValue) {
      $scope.query._page = bookmark;
    }

    $scope.getDesserts();
  });
}

class PostsController {
  constructor($mdDialog, $posts, $scope) {
    this.$mdDialog = $mdDialog;
    this.$posts = $posts;
    this.$scope = $scope;

    this.selected = [];
    this.filter = {
      options: {
        debounce: 500
      }
    }
    this.query = {
      _limit: 10,
      _page: 1
    }


    $scope.$watch(() => this.query.filter, function (newValue, oldValue, scope) {

    });

  }

  updatePosts(posts) {
    this.posts = posts;
  }

  getPosts() {
    this.promise = this.$posts.query($scope.query, success).$promise;
  }

}

