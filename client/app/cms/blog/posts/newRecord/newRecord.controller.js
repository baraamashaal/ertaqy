// export default class newRecord {
//   constructor($resource, $mdDialog) {
//     'ngInject';

//     this.$mdDialog = $mdDialog;

//   }

//   cancel = this.$mdDialog.cancel

//   newRecord() {

//   }

// }

export default function ($mdDialog, $nutrition, $scope) {
  'ngInject';

  this.cancel = $mdDialog.cancel;

  function success(dessert) {
    $mdDialog.hide(dessert);
  }

  this.addItem = function () {
    $scope.item.form.$setSubmitted();

    if ($scope.item.form.$valid) {
      $nutrition.desserts.save({ dessert: $scope.dessert }, success);
    }
  };
}

