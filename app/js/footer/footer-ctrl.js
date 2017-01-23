angular.module( 'footer', [] ).config( function( $stateProvider ) {
	$stateProvider.state( 'footer', {
		templateUrl: 'footer/footer.tpl',
		controller: 'FooterCtrl'
	} );
} ).controller( 'FooterCtrl', function( $scope  ) {
	$scope.footerCtrl = {
		subscribe: {},
	};
} );