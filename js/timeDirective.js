var app = angular.module('timeDir');

app.directive('showTime', function(){
	return {
		restrict: 'E',
		template: '<div> The Current Time is {{time}} </div>',
		link: function(scope, elem, attr){
			var currentTime = new Date();
			scope.time = currentTime.toString();
		}
	}

})