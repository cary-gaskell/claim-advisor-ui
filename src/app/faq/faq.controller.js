(function() {
  'use strict';

  angular
      .module('claimAdvisor')
      .controller('FaqController', FaqController);

  /** @ngInject */
  function FaqController($timeout, toastr) {
    var vm = this;

    vm.showToastr = showToastr;

    activate();

    function activate() {
    }
  }
})();
