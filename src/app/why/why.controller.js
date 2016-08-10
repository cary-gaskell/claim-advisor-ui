(function() {
  'use strict';

  angular
      .module('claimAdvisor')
      .controller('WhyController', WhyController);

  /** @ngInject */
  function WhyController($timeout, toastr) {
    var vm = this;

    vm.showToastr = showToastr;

    activate();

    function activate() {
    }
  }
})();
