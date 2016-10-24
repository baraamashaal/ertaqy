export default class deletePost {
  constructor($mdDialog, $posts, $scope, $q, posts) {
    'ngInject';
    this.$mdDialog = $mdDialog;
    this.$posts = $posts;
    this.posts = posts;
    this.$scope = $scope;
    this.$q = $q;



    $q.all(posts.forEach(this.deletePost)).then(this.removeDialog);
  }
  cancel = $mdDialog.cancel;
  deletePost(dessert, index) {
    var deferred = $posts.remove({ id: dessert._id });

    deferred.$promise.then(function () {
      desserts.splice(index, 1);
    });

    return deferred.$promise;
  }
}

