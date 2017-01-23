angular.module( 'list', [] ).config( function( $stateProvider) {
	$stateProvider.state( 'home.list', {
		url: '/list',
		templateUrl: 'list/list-tpl.tpl',
		controller: 'ListCtrl',
		resolve:{
			data:function(CartService){
				return CartService.getList();
			}
		}
	} );
} ).controller( 'ListCtrl', function( $scope,CartService,AppUtils,data) {
	$scope.listCtrl = {
		fruits:data.data,
		cartItemCount:CartService.getCount()
	};

$scope.removeFromCart= removeFromCart;
$scope.addToCart= addToCart;

function removeFromCart(item,index){
	//CartService.removeFromCart(item,id);
	if(!CartService.findById(item.id)){
     $scope.listCtrl.fruits = AppUtils.removeFromArrayByField($scope.listCtrl.fruits,"id",item);
	}
	
}

function addToCart(item){
	if(!CartService.findById(item.id)){
	//AppUtils.removeFromArrayByField(angular.copy($scope.listCtrl.fruits),"id",item);
	item.inCart =true;
	CartService.moveToCart(item);
}else{
	alert("Already added");
}

$scope.listCtrl.cartItemCount =  CartService.getCount();
}
} );