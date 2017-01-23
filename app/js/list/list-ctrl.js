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
		cartItemCount:CartService.getCount(),
imgPath:'http://lorempixel.com/60/60/'

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

///////////materila content///////

  $scope.todos = [];
  for (var i = 0; i < 10; i++) {
    $scope.todos.push({
      // face: imagePath,
      what: "Apple",
      // who: "Min Li Chan",
      notes: "Eat one every day.",
      price:"$25"

    });
  }
} );