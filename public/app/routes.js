angular.module('angularApp')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
        function($stateProvider, $urlRouterProvider, $locationProvider) {

            $locationProvider.html5Mode(true);

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('index', {
                    url: '/',
                    templateUrl: 'app/views/index.html',
                    controller: 'IndexCtrl'
                });
        }
    ]
);
