angular.module('app').controller('MainCtrl', ['$scope', '$stateParams', 'CategoryFactory', function($scope, $stateParams, CategoryFactory) {

	// Necessary for category.html to recognize stateParamsId
	$scope.stateParamsId = $stateParams.id;
	
	$scope.categories = CategoryFactory.query({id: $stateParams.id});

	$scope.getCategory = function(id) {
		var result;
		$scope.categories.forEach(function(item){
			if(item.id == id) {
				result = item;
			}
	});

	return result;

	};

	$scope.getCategoryName = function(categoryId) {
		var result;
		$scope.categories.forEach(function(item){
			if(item.id == categoryId) {
				result = item.category;
			}
		});

		return result;
	
	};
	
}]);
