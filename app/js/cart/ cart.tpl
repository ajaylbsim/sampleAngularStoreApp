
  <div id="content" data-0="padding-top: 192px;" data-192="padding-top: 190px;">
    <div class="card" ng-repeat="fruit in cartCtrl.fruits">
 	<span class="space"> {{fruit.name}}</span>
		<span class="space"> {{fruit.price}}</span>
		<button class="space-4" ng-click="addToCart(fruit)">Add To Cart</button>
		<button class="space-4"  ng-click="removeFromCart(fruit,$index)">X</button>    </div>
    
  </div>