angular.module('WeddingCtrl', ['WeddingServices', 'ngAnimate', 'ui.bootstrap', 'bootstrapLightbox'])

app.controller('HomeCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.name = "Kendall Maniulit"

	$state.go('Home')

}])

app.controller('GalleryCtrl', function($scope, Lightbox) {


$scope.images = [
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
    {
      'url': 'images/.jpg',
    },
  ];

  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };
});