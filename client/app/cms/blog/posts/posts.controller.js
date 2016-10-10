export default class PostsController {
  constructor($mdColors, POSTS) {
    'ngInject'



    this.$mdColors = $mdColors
    this.name = 'posts';
    this.selectedRows = [];
    this.isEmptyRows = true;
    this.POSTS = POSTS;


    // console.log('POSTS', POSTS);
    this.getPosts()
  }

  isSelectedRows() {
    return this.selectedRows && this.selectedRows.length
  }

  getPosts() {
    let that = this;
    this.POSTS.get().then(function (res) {
      that.posts = res.data
    }, function (error) {

    });
  }
};

