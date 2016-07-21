angular.module('WeddingCtrl', ['ngAnimate', 'ui.bootstrap', 'bootstrapLightbox'])

app.controller('GalleryCtrl', function ($scope, Lightbox) {
$scope.name = "Kendall Maniulit"

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