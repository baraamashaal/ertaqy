export default class newRecord {
  constructor($resource, $mdDialog) {
    'ngInject';

    this.$mdDialog = $mdDialog;

  }

  cancel = this.$mdDialog.cancel

  newRecord() {

  }

}

