(function() {
  'use strict';

  angular
      .module('claimAdvisor')
      .controller('ProcessController', ProcessController);

  /** @ngInject */
  function ProcessController($timeout, toastr) {
    var vm = this;

    vm.showToastr = showToastr;

    activate();

    function activate() {
    }
  }
})();
