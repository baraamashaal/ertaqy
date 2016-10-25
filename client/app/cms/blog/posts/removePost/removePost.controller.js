export default class deletePost {
  constructor($mdDialog, $posts, $scope, $q, posts) {
    'ngInject';
    this.$mdDialog = $mdDialog;
    this.$posts = $posts;
    this.posts = posts;
    this.$scope = $scope;
    this.$q = $q;

    console.log('this.$posts', this.$posts);


    // $q.all(posts.forEach(this.deletePost)).then(this.$mdDialog.hide());
  }
  deletePost(post, index) {
    var deferred = this.$posts.remove({ id: post.id });
    var that = this;
    deferred.$promise.then(function () {
      that.posts.splice(index, 1);
    });

    return deferred.$promise;
  }
  confirm() {
    this.$q.all(this.posts.forEach(this.deletePost).then(this.$mdDialog.hide());
    }
  }

