angular.module( 'cart', [] ).config( function( $stateProvider ) {
	$stateProvider.state( 'home.cart', {
		url: '/cart',
		templateUrl: 'cart/caert-tpl.tpl',
		controller: 'CartCtrl'
	} );
} ).controller( 'CartCtrl', function( $scope,CartService,AppUtils) {
	$scope.cartCtrl = {
		fruits:CartService.getCart(),
		cartItemCount:CartService.getCount()
	};

	$scope.removeFromCart= removeFromCart;


	function removeFromCart(item){
		if(CartService.findById(item.id)){
			AppUtils.removeFromArrayByField($scope.cartCtrl.fruits,"id",item);
			$scope.cartCtrl.cartItemCount = CartService.getCount();
		}else{
			alert("Already removed");
		}
	}

} );
