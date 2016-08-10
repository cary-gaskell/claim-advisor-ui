(function() {
  'use strict';

  angular
      .module('claimAdvisor')
      .controller('TestimonialController', TestimonialController);

  /** @ngInject */
  function TestimonialController($timeout, toastr) {
    var vm = this;

    vm.showToastr = showToastr;

    activate();

    function activate() {
    }
  }
})();
