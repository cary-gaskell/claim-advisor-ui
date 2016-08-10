(function() {
  'use strict';

  angular
      .module('claimAdvisor')
      .controller('AboutController', AboutController);

  /** @ngInject */
  function AboutController($timeout, toastr) {
    var vm = this;

    vm.showToastr = showToastr;

    activate();

    function activate() {
    }
  }
})();
