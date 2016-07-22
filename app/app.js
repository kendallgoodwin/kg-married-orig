var app = angular.module('WeddingApp', ['WeddingCtrl', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  //define routes
  $stateProvider
  .state('Home', {
    url: '/',
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  })
  $stateProvider
  .state('Gallery', {
  	url: '/gallery',
  	templateUrl: 'views/gallery.html',
  	controller: 'GalleryCtrl'
  })



  //$locationProvider.html5Mode(false).hashPrefix('!');
}]);