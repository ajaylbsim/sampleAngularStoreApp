angular.module('app').service('CartService', ['$http', function($http){
	var cart = [];
	var baseUrl = "http://localhost:3000";
	var that = this;
	this.moveToCart=function(item){
		cart.push(item);
		that.updateOnAdd(item);
	};

	this.removeFromCart=function(){
		cart.splice(0,1);
	};

	this.getCart = function(){
	return $http.get(baseUrl+"/item/cart",function(res){});
	};
	this.getList = function(){
	return $http.get(baseUrl+"/item/list",function(res){});
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
     $http.post(baseUrl+"/item",item,function(res){});
	};

}]);