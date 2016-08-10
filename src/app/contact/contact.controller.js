(function() {
  'use strict';

  angular
      .module('claimAdvisor')
      .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController(NgMap) {
    var vm = this;

    activate();

    function activate() {
    }

    vm.mapCenter = [39.957204, -76.738443];
    NgMap.getMap().then(function (map) {
      vm.map = map;
    });
  }
})();
