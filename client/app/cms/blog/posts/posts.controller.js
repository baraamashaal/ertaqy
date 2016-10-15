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

export function sssss($mdDialog, $nutrition, $scope) {
  'ngInject'

  var bookmark;

  $scope.selected = [];

  $scope.filter = {
    options: {
      debounce: 500
    }
  };

  $scope.query = {
    q: '',
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
      controller: newRecordController,
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      template: newRecordTemplate,
    }).then($scope.getDesserts);
  };

  $scope.delete = function (event) {
    $mdDialog.show({
      clickOutsideToClose: true,
      controller: newRecordController,
      controllerAs: 'ctrl',
      focusOnOpen: false,
      targetEvent: event,
      locals: { desserts: $scope.selected },
      template: newRecordTemplate,
    }).then($scope.getDesserts);
  };

  $scope.getDesserts = function () {
    $scope.promise = $nutrition.desserts.query($scope.query, success).$promise.then(function () {
      console.log('done');
    }, function () {
      console.log('fail');
    });
    console.log('$scope.promise', $scope.promise);
  };

  $scope.removeFilter = function () {
    $scope.filter.show = false;
    $scope.query.q = '';

    if ($scope.filter.form.$dirty) {
      $scope.filter.form.$setPristine();
    }
  };

  $scope.$watch('query.q', function (newValue, oldValue) {
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

class PostssssController {
  constructor($mdDialog, $posts, $scope) {
    'ngInject'
    this.$mdDialog = $mdDialog;
    this.$posts = $posts;
    this.$scope = $scope;

    this.selectedRecords = [];

    this.filter = {
      options: {
        debounce: 500
      }
    }
    this.query = {
      _limit: 10,
      _page: 1
    }
    this.tableMode = this._setTableMode()

    $scope.$watch(() => this.query.filter, function (newValue, oldValue, scope) {

    });

  }

  isDefaultMode() {
    return !(this.isSelectMode() || this.isSearchMode()) ? true : false
  }

  isSelectMode() {
    return this.selectedRecordsCount() ? true : true;
  }

  selectedRecordsCount() {
    return this.selectedRecords ? this.selectedRecords.length : null;
  }
  _setTableMode() {
    return this.isSelectMode() ? 'select-mode' : this.isSearchMode() ? 'filter-mode' : 'md-default default-mode';
  }

  isSearchMode() {

  }

  updatePosts(posts) {
    this.posts = posts;
  }

  getPosts() {
    this.promise = this.$posts.query($scope.query, success).$promise;
  }

}

// export default class {
//   tableModes = {
//     default: 'default-mode',
//     search: 'search-mode',
//     select: 'select-mode'
//   }

//   constructor($mdDialog, $posts, $scope) {
//     'ngInject'
//     this.$mdDialog = $mdDialog;
//     this.$posts = $posts;
//     this.$scope = $scope;

//     this.tableMode = this.tableModes.default;

//   }

//   _setTableMode = function (mode) {
//     this.tableMode = this.tableModes[mode]
//   }

//   // selectedRecordsCount() {
//   //   return this.selectedRecords && this.selectedRecords.length
//   // }

//   isSelectMode() {
//     return this.tableMode === this.tableModes.select
//   }

//   isSearchMode() {
//     return this.tableMode === this.tableModes.search
//   }

//   isDefaultMode() {
//     return this.tableMode === this.tableModes.default
//   }

// }

// export default class postsController {
//   static defConf = {};

//   selectedRecored = [];

//   tableQuery = {
//     _limit: 10,
//     _page: 1,
//     q: ''
//   };

//   tableModes = {
//     select: {
//       isActive: false,
//       className: 'select-mode'
//     },
//     select: {
//       isActive: false,
//       className: 'select-mode'
//     },
//     select: {
//       isActive: false,
//       className: 'select-mode'
//     }
//   }

//   constructor($mdDialog, $posts, $scope, $mdColors) {
//     'ngInject'
//     this.$mdDialog = $mdDialog;
//     this.$mdColors = $mdColors;
//     this.$posts = $posts;
//     this.$scope = $scope;

//     this.toolbarTheme = this._setToolbarTheme();
//   }

//   getData() {
//     this.promise = this.$posts.query(this.tableQuery, this.setPosts).$promise.then(this.done, this.fail);
//   }

//   setPosts(posts) {
//     this.posts = posts;
//   }

//   done() {

//   }

//   fail() {

//   }

//   _setToolbarTheme() {
//     return {
//       'background-color': this.isSelectMode() ? 'accent-500-0.20' : 'background',
//       'color' : 'rgba()'
//     };
//   }

//   isSelectMode() {
//     return true;
//   }

//   isSearchMode() {

//   }

//   isDefaultMode() {
//     return !(this.isSearchMode() && this.isSelectMode())
//   }
// }

export default class postsController {
  bookmark = null;
  selectedRecored = [];
  recordQuery = {
    q: '',
    _limit: '5',
    order: 'nameToLower',
    _page: 1
  };
  tableModes = {
    default: {
      name: 'defaultMode',
      isActive: false,
      className: 'default-mode',
      callback: function () {

      }
    },
    select: {
      name: 'selectMode',
      isActive: false,
      className: 'select-mode',
      callback: function () {
        console.log('saghshigasgakhsgajkhs')
      }
    },
    search: {
      name: 'searchMode',
      isActive: false,
      className: 'search-mode',
      callback: function () {
        console.log('search mode call back')
      }
    }
  };
  oldTableMode = null;
  currentTableMode = null;

  constructor($mdDialog, $posts, $scope, $mdColors) {
    'ngInject'
    this.$mdDialog = $mdDialog;
    this.$mdColors = $mdColors;
    this.$posts = $posts;
    this.$scope = $scope;

    this._init();
  }

  _init() {
    this._setTableMode(this.tableModes.default);

    this.toolbarTheme = this._setToolbarTheme();

    this.$scope.$watch(() => this.recordQuery.q, (newValue, oldValue) => {
      if (!oldValue) {
        this.bookmark = this.recordQuery._page;
      }

      if (newValue !== oldValue) {
        this.recordQuery._page = 1;
      }

      if (!newValue) {
        this.recordQuery._page = this.bookmark;
      }

      this.getPosts();
    });
  }

  _setTableMode(tableMode) {
    if (tableMode === this.currentTableMode) return;

    if (this.currentTableMode) {
      this.oldTableMode = this.currentTableMode;
      this.oldTableMode.isActive = false
    }

    this.currentTableMode = tableMode;
    tableMode.isActive = true;
    tableMode.callback()
  }

  _setToolbarTheme() {
    let theme = {
      'background-color': 'background'
    }
    if (this.currentTableMode.name === this.tableModes.select.name) {
      theme['background-color'] = 'accent-A200-0.25'
      theme.color = 'accent-A200'
    }
    return theme;
  }

  activeTableMode(mode) {
    this._setTableMode(this.tableModes[mode] || this.currentTableMode);
  }

  getPosts() {
    this.recordPromise = this.$posts.query(this.recordQuery, this._setPosts.bind(this)).$promise;
  }

  _setPosts(posts) {
    this.posts = posts;
  }

}

