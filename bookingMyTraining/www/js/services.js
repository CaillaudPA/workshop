angular.module('starter.services', [])

.factory('Annonces', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var annonces = [{
    id: 0,
    name: 'Thales',
    lastText: 'Stage de 2 mois / administrateur réseau',
    face: 'img/thales.png'
  }, {
    id: 1,
    name: 'Capgemini',
    lastText: 'Stage de 6 mois / développement mobile',
    face: 'img/capgemini.png'
  }, {
    id: 2,
    name: 'Systeme U',
    lastText: 'Stage de 6 mois / système',
    face: 'img/systeme_u.jpg'
  }, {
    id: 3,
    name: 'Système U',
    lastText: 'Stage de 6 mois / sécurité',
    face: 'img/systeme_u.png'
  }, {
    id: 4,
    name: 'Google',
    lastText: 'Stage de 3 mois / développement web',
    face: 'img/google.png'
  }];

  return {
    all: function() {
      return annonces;
    },
    remove: function(annonce) {
      annonces.splice(annonces.indexOf(annonce), 1);
    },
    get: function(annonceId) {
      for (var i = 0; i < annonces.length; i++) {
        if (annonces[i].id === parseInt(annonceId)) {
          return annonces[i];
        }
      }
      return null;
    }
  };
});
