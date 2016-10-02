class appController {
  constructor($mdSidenav) {
    'ngInject'
    this.name = 'my app';
    this.$mdSidenav = $mdSidenav;

  }
  openLeftMenu() {
    this.$mdSidenav('left').toggle();
  }
}

export default appController;

