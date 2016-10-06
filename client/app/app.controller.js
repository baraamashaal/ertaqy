class appController {

  constructor($mdSidenav) {
    'ngInject'
    this.name = 'my app';
    this.$mdSidenav = $mdSidenav;

  }



  openMenu($mdOpenMenu, ev) {
    console.log('ev', ev);
    $mdOpenMenu(ev);
  }

  openAppNav() {
    this.$mdSidenav('app-nav').open();
  }


  appNavState() {
    return this.$mdSidenav('app-nav').isLockedOpen();
  }

}

export default appController;

