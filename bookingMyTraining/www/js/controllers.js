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
    $scope.annonces = [{
    id: 0,
    name: 'Thales',
    lastText: 'Stage de 2 mois / administrateur réseau',
    face: 'img/thales.jpg'
  }, {
    id: 1,
    name: 'Capgemini',
    lastText: 'Stage de 6 mois / développement mobile',
    face: 'img/capgemini.jpg'
  }, {
    id: 2,
    name: 'Systeme U',
    lastText: 'Stage de 6 mois / système',
    face: 'img/systeme_u.jpg'
  }, {
    id: 3,
    name: 'Système U',
    lastText: 'Stage de 6 mois / sécurité',
    face: 'img/systeme_u.jpg'
  }, {
    id: 4,
    name: 'Google',
    lastText: 'Stage de 3 mois / développement web',
    face: 'img/google.jpg'
  }];
    //Annonces.all();
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
