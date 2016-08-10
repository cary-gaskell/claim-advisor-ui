(function() {
  'use strict';

  angular
    .module('claimAdvisor')
    .controller('PricingController', PricingController);

  /** @ngInject */
  function PricingController($timeout, webDevTec, toastr) {
    var vm = this;

    activate();

    function activate() {
    }

  }
})();
