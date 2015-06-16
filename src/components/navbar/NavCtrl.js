angular.module('app').controller('NavCtrl', ['$scope', '$stateParams', 'CategoryFactory', 'CartFactory', function($scope, $stateParams, CategoryFactory, CartFactory) {
	
	$scope.categories = CategoryFactory.query({id: $stateParams.id});
	
	$scope.totalItems = function(){
		return CartFactory.calculateItems();
	};
	
}]);
