(function() {
  'use strict';

  angular
      .module('claimAdvisor')
      .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController($timeout, toastr) {
    var vm = this;

    vm.showToastr = showToastr;

    activate();

    function activate() {
    }
  }
})();
