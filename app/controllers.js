angular.module('WeddingCtrl', ['WeddingServices', 'ngAnimate', 'ui.bootstrap', 'bootstrapLightbox'])

app.controller('HomeCtrl', ['$scope', '$state', function($scope, $state) {
	$scope.name = "Kendall Maniulit"

	$state.go('Home')

}])

app.controller('GalleryCtrl', function($scope, Lightbox) {


$scope.images = [
    {
      'url': 'images/Kendall+Greg(TheStory)000.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)001.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)002.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)003.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)004.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)005.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)006.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)007.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)008.jpg',
    },
    // {
    //   'url': 'images/Kendall+Greg(TheStory)009.jpg',
    // },
    {
      'url': 'images/Kendall+Greg(TheStory)010.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)011.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)012.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)013.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)014.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)015.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)016.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)017.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)018.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)019.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)020.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)021.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)022.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)023.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)024.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)025.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)026.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)027.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)028.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)029.jpg',
    },
    {
      'url': 'images/Kendall+Greg(TheStory)030.jpg',
    },
  ];

  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };
});