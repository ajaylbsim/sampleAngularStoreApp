angular.module( 'cart', [] ).config( function( $stateProvider ) {
	$stateProvider.state( 'home.cart', {
		url: '/cart',
		templateUrl: 'cart/caert-tpl.tpl',
		controller: 'CartCtrl',
		resolve:{
			data:function(CartService){
				return CartService.getCart();
			}
		}
	} );
} ).controller( 'CartCtrl', function( $scope,CartService,AppUtils,data) {
	console.log(data);
	$scope.cartCtrl = {
		fruits:data.data,
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
