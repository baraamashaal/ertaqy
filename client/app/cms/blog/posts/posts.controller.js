export default class PostsController {
  constructor($mdColors) {
    'ngInject'
    this.$mdColors = $mdColors

    this.name = 'posts';
    this.selectedRows = [];
    this.isEmptyRows = true;
  }

  isSelectedRows() {
    return this.selectedRows && this.selectedRows.length
  }
};

