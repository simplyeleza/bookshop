var app = angular.module('myApp', []);


app.controller('HeaderCtrl', function($scope) {
    $scope.appDetails = {
        title:"BookShop",
        tagline:"We have 1 million books for you"
    };
  });

