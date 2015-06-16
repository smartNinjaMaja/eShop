angular.module('app').factory('CartFactory', [ '$rootScope', function($rootScope){
  
	var cart = [];
	
	cartAddNew = function(product){
		product.quantity = 1;
		cart.push(product);
	};
	
	indexOf = function(list, id) {
		for (var i = 0; i < list.length; i++) {
			if (list[i].id === id) { 
				return i; 
			}
		}
		return -1;
	}; 
	
	return {
		getCart : function() {
			return cart;
		},
		cartAdd : function(product){
			
			var match = false;
			
			// Cart has at leas one product in it.
			if(cart.length !== 0){
				
				// Loop thorugh the products in the cart and check if a new product is already in there.
				cart.forEach(function(item){
					
					if (item.id === product.id){
						// A new product already in the cart
						match = true
						
						// Check if there is enough pieces of a new product in stock
						if (item.quantity < product.stock){
							// if yes, increase quantity by 1
							cart[indexOf(cart, item.id)].quantity += 1;
						} else {
							// if no, make an alert
							alert("Sorry, only " + product.stock + " pieces of " + product.name + " in stock and all " + product.stock + " pieces already in your shopping cart.");
						}
						
					}
					
				});
				
				// A new product not in the cart yet.
				if(!match) {
					cartAddNew(product);
				}
				
			// Cart is empty. 
			} else {
				cartAddNew(product);
			}

		},
		cartRemove : function(productId) {
			console.log(productId);
			cart[indexOf(cart, productId)].quantity = 0;
		},
		calculateTotal : function() {
			var total = 0;
			
			cart.forEach(function(item){							
				total += item.quantity * item.price;
			});		
			
			return total;
		},
		calculateItems : function() {
			var totalItems = 0;
			
			cart.forEach(function(item){
				totalItems += item.quantity;
			});	

			return totalItems;
		}
	};                                  
}]);