class appController {
  constructor($mdSidenav) {
    this.name = 'my app';
    this.$mdSidenav = $mdSidenav;

    console.log('$mdSidenav', $mdSidenav);
    console.log('this', this);
  }
  openLeftMenu() {
    this.$mdSidenav('left').toggle();
  }
}

appController.$inject = ['$mdSidenav'];

export default appController;

