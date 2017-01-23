angular.module( 'app', [ 'ui.router', 'home','header', 'footer'
] ).config( function($urlRouterProvider) {
  $urlRouterProvider.otherwise( '/home/cart' );
} ).run( [ '$rootScope',
  function( $rootScope) {
  }
] );
