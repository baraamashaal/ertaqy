class appController {

  constructor($mdSidenav, $state) {
    'ngInject'
    this.name = 'my app';
    this.$mdSidenav = $mdSidenav;
    this.$state = $state;
    this.appbarTabs = this.$state.current.data ? (this.$state.current.data.appbarTabs ? this.$state.current.data.appbarTabs : false) : false;
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

  // updateAppbarTabs() {
  //   this.appbarTabs = this.$state.current.data.tabs
  // }

}

export default appController;

