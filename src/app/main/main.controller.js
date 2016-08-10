(function() {
  'use strict';

  angular
    .module('claimAdvisor')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec, toastr, $state) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1465614857257;
    vm.showToastr = showToastr;
    vm.placeChanged = placeChanged;
    activate();
    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function placeChanged () {
      console.log("fired");
      var pl = this.getPlace();
      if (angular.isDefined(pl.geometry)){
        if (pl.geometry.location) {
          console.log(pl);
          //_wl.newWatchlist.location.lat = pl.geometry.location.lat();
          //_wl.newWatchlist.location.lng = pl.geometry.location.lng();
        }
        //_wl.newWatchlist.location.name = pl.formatted_address;
      } else {
        console.log("error on location select...");
      }
    };

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
