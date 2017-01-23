
<style type="text/css" media="screen">
table#newtbl, td#newtbl{
  font:100% Arial, Helvetica, sans-serif;
}
table#newtbl{width:100%;border-collapse:collapse;margin:1em 0;}
th#newtbl, td#newtbl{text-align:left;padding:.5em;border:1px solid #fff;}
th#newtbl{background:#328aa4 url(tr_back.gif) repeat-x;color:#fff;}
td#newtbl{background:#e5f1f4;}

/* tablecloth styles */

tr.even td#newtbl{background:#e5f1f4;}
tr.odd td#newtbl{background:#f8fbfc;}

th.over, tr.even th.over, tr.odd th.over{background:#4a98af;}
th.down, tr.even th.down, tr.odd th.down{background:#bce774;}
th.selected, tr.even th.selected, tr.odd th.selected{}

</style>
<div>Cart Item count {{cartCtrl.cartItemCount}} <span ui-sref="home.list">view List</span> </div>
  
</div>
 
      <table>
        <thead>
           <tr>
                <th data-field="price">Search</th>
                <th data-field="price"><input type="text" ng-model="search" /></th>
          </tr>
          <tr>
              <th data-field="name">Item Name</th>
              <th data-field="price">Item Price</th>
                <th data-field="price">Action</th>
          </tr>
        </thead>

        <tbody>
          
          <tr ng-repeat="fruit in cartCtrl.fruits |filter: { name: search } track by $index ">
            <td class="space">{{fruit.name}}</td>
                       <td>${{fruit.price}}</td>
            <td ng-click="removeFromCart(fruit)"> <button>X</button></td>
          
          </tr>
        
        </tbody>
      </table>