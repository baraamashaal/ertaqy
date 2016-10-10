export default class PostsController {
  constructor($mdColors) {
    'ngInject'
    this.$mdColors = $mdColors

    this.name = 'posts';
    this.selectedRows = [];
    this.isEmptyRows = true;

    this.posts = [{
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, {
      title: 'first post',
      status: 'active',
      auther: 'baraa mashaal',
      comments: 10,
      date: '12/10/2016',
      url: 'blog/posts/1'
    }, ]
  }

  isSelectedRows() {
    return this.selectedRows && this.selectedRows.length
  }
};

