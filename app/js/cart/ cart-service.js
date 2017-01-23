angular.module('app').service('CartService', ['$http', function($http){
	var cart = [];
	var that = this;
	this.moveToCart=function(item){
		cart.push(item);
		that.updateOnAdd(item);
	};

	this.removeFromCart=function(){
		cart.splice(0,1);
		console.log(cart);
	};
	this.getCart = function(){
		return cart;
	};
	this.findById = function(id){
		//console.log();
		for (var i = cart.length - 1; i >= 0; i--) {
			if(cart[i].id== id){
				return true;
			}
		}
		return false;
	};
	this.getCount = function(){
		return cart.length;
	};
	this.updateOnAdd = function(item){
		console.log(item);
$http.post("http://localhost:3000/item",item,function(res){});
	};

}]);