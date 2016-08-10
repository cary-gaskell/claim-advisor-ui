(function() {
  'use strict';

  angular
      .module('claimAdvisor')
      .controller('BusinessController', BusinessController);

  /** @ngInject */
  function BusinessController($timeout, toastr) {
    var vm = this;

    vm.showToastr = showToastr;

    activate();

    function activate() {
    }
  }
})();
