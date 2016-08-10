(function() {
  'use strict';

  angular
    .module('claimAdvisor')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'vm'
      })
      .state('pricing', {
        url: '/pricing',
        templateUrl: 'app/pricing/pricing.html',
        controller: 'PricingController',
        controllerAs: 'vm'
      })
        .state('process', {
          url: '/process',
          templateUrl: 'app/process/process.html',
          controller: 'ProcessController',
          controllerAs: 'vm'
        })
        .state('contact', {
          url: '/contact-us',
          templateUrl: 'app/contact/contact.html',
          controller: 'ContactController',
          controllerAs: 'vm'
        })
        .state('why', {
          url: '/why-us',
          templateUrl: 'app/why/why.html',
          controller: 'WhyController',
          controllerAs: 'vm'
        })
        .state('testimonial', {
          url: '/testimonials',
          templateUrl: 'app/testimonial/testimonial.html',
          controller: 'TestimonialController',
          controllerAs: 'vm'
        })
        .state('faq', {
          url: '/faq',
          templateUrl: 'app/faq/faq.html',
          controller: 'FaqController',
          controllerAs: 'vm'
        })
        .state('business', {
          url: '/business-claims',
          templateUrl: 'app/business/business.html',
          controller: 'BusinessController',
          controllerAs: 'vm'
        })
        .state('about', {
          url: '/about-us',
          templateUrl: 'app/about/about.html',
          controller: 'AboutController',
          controllerAs: 'vm'
        });

    $urlRouterProvider.otherwise('/');
  }

})();
