angular.module( 'app', [ 'ui.router','ngMaterial','ngAnimate', 'ngAria', 'home','header', 'footer'
] ).config( function($urlRouterProvider) {
  $urlRouterProvider.otherwise( '/home/cart' );
} ).run( [ '$rootScope',
  function( $rootScope) {
  }
] );
