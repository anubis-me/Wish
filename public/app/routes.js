var app = angular.module('wishRoute',['ngRoute'])

    .config(function($routeProvider, $locationProvider) {

        $routeProvider

            //directs to home page basic wish page
            .when('/', {
                templateUrl  :'app/views/index.html'
            })
            //adds Create page in index page
            .when('/createwish',{
                templateUrl:'app/views/wishing/createwish.html'
            })
            //adds No of views of you wish
            .when('/views',{
                templateUrl :'app/views/wishing/views.html'
            })
            //shows the generated wish open from url
            .when('/share',{
                templateUrl: 'app/views/wishing/share.html'
            })
            //shows differnt type of wish sample
            .when('/type1',{
                templateUrl :'app/views/type/fire1.html'
            })
            .when('/type2',{
                templateUrl :'app/views/type/type2.html'
            })
            .when('/type3',{
                templateUrl :'app/views/type/type3.html'
             })
            .when('/type4',{
                templateUrl :'app/views/type/type4.html'
            })

            .otherwise({ redirectTo: '/' });      // If user tries to access any other route, redirect to home page

        $locationProvider.html5Mode({ enabled: true, requireBase: false }); // Required to remove AngularJS hash from URL
    });
