(function() {
  'use strict';

  angular
      .module('claimAdvisor')
      .directive('claimFooter', claimFooter);

  /** @ngInject */
  function claimFooter() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/footer/footer.html',
      scope: {
        creationDate: '='
      },
      controller: FooterController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function FooterController(moment, $state) {
      var vm = this;
    }
  }

})();
