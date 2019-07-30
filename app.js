var app = angular.module('myApp', ["ngRoute"]);

app.config(function($routeProvider){

    $routeProvider
       .when( "/books",{
           templateUrl:"partials/book-list.html",
           controller:"BookListCtrl"
       })
       .when("/cart",{
           templateUrl:"partials/cart-list.html"
       })
       .otherwise({
           redirectTo: "/books"
       });


});


app.controller('HeaderCtrl', function($scope) {
    $scope.appDetails = {
        title:"BookShop",
        tagline:"We have 1 million books for you"
    };
  });

app.controller('BookListCtrl',function($scope){

    $scope.books = [
        {
            imgUrl:"https://via.placeholder.com/140x300",
            name:"Adultery",
            price:205,
            rating:4,
            binding:"Paperback",
            publisher:"Random house India",
            releaseDate:"12-08-2016",
            details:"Meatball corned beef shankle porchetta, tail biltong andouille capicola ground round meatloaf t-bone short loin pork chop. Burgdoggen jowl pastrami fatback. "
        },
        {
            imgUrl:"https://via.placeholder.com/140x200",
            name:"Thomas",
            price:304,
            rating:4,
            binding:"Paperback",
            publisher:"United states",
            releaseDate:"11-01-2012",
            details:"Drumstick short ribs meatloaf alcatra, picanha burgdoggen salami biltong cow frankfurter bacon corned beef turducken beef.  "
  
        },
        {
            imgUrl:"https://via.placeholder.com/140x150",
            name:"Martin",
            price:426,
            rating:4,
            binding:"Paperback",
            publisher:"Pelican",
            releaseDate:"10-08-2010",
            details:"Salami beef ribs tongue pork loin tail t-bone swine bacon meatloaf ground round sausage short loin capicola pig doner.  "

        },
        {
            imgUrl:"https://via.placeholder.com/140x300",
            name:"Malcolm",
            price:567,
            rating:4,
            binding:"Paperback",
            publisher:"Munishi",
            releaseDate:"11-06-2007",
            details:"Ground round salami tongue bacon landjaeger prosciutto porchetta bresaola beef ribs biltong spare "

        }
    ];


    $scope.addToCart = function(book){
        console.log("add to kart: ", book);
    }


});