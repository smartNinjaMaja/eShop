angular.module('app').directive('appTimepicker', function(){
    return {
        //restrict: 'E',
        controller: 'TimeController',
        templateUrl: 'templates/timepicker.html'
    };
});