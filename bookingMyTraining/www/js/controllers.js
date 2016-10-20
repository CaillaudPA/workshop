angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

// Suppression d'une annonce
.controller('AnnoncesSuppr', function($scope, Annonces) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.annonces = Annonces.all();
  $scope.remove = function(annonce) {
    Annonces.remove(annonce);
  };
})
// Ajout d'une annonce
.controller('AnnoncesAjout', function($scope, Annonces) {
  $scope.annonces = Annonces.all();
  $scope.add = function(annonce) {
    Annonces.add(annonce);
  };
})
// Détails sur l'annonce
.controller('AnnonceDetailCtrl', function($scope, $stateParams, Annonces) {
  $scope.annonce = Annonces.get($stateParams.annonceId);
})
// Détails sur l'entreprise
.controller('EntrepriseDetailCtrl', function($scope, $stateParams, Entreprises) {
  $scope.entreprise = Entreprises.get($stateParams.entrepriseId);
})

.controller('LoginCtrl', function($scope, $stateParams){
  console.log('ok');
})

.controller("AnnonceCtrl", function($scope, $stateParams){

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
