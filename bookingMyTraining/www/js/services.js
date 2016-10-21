
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
})

.factory('Entreprises', function(){
  var entreprises = [{
    id: 0,
    nom: 'Orange',
    titre: 'Développeur JAVA',
    nomPDG: 'Stephane Richard',
    adresse: '78, rue Olivier de Serres, 75015, Paris (France)',
    logo: 'https://fr.wikipedia.org/wiki/Orange_(entreprise)#/media/File:Orange_logo.svg',
    url: 'www.orange.com',
    siret: '380 129 866',
    nbemployes: '2000',
    managementsocial: '',
    email: 'contact@orange.com',
    password:'Orange2016'
  }, {
    id: 1,
    nom: 'KEPLER SOLUTIONS',
    titre: 'Développeur Symfony',
    nomPDG: 'Alaim DOMGUEP',
    adresse: '1 boulevard Jean Moulin, 44000 Nantes',
    logo: 'http://static8.viadeo-static.com/cijV6V3F3r4k_RUjsPKqf66nVC8=/fit-in/200x200/filters:fill(white)/310d9b09532548f5a28343eae38a4802/image.png',
    url: 'www.kepler-solutions.fr',
    siret: '81010568400015',
    nbemployes: '9',
    managementSocial: 'non',
    secteur: 'automobile',
    email: 'robin.cornec@kepler-solutions.fr',
    password:'azerty'
  }, {
    id: 2,
    nom: 'AGM Informatique',
    titre: 'Analyste programmeur',
    nomPDG: 'Joseph ROUINSARD',
    adresse: '10 rue Gaëtan Rondeau, 44200 NAntes',
    logo: 'http://80.15.27.216:8080/FOCATXP_ModuleWeb/public/images/Logo.png',
    url: 'http://www.agm-informatique.com/',
    siret: '42882615000040',
    nbemployes: '21',
    managementsocial: 'oui',
    secteur: 'médico-social',
    email: 'agm@agm-informatique.com',
    password:'agmInfo'
  }, {
    id: 3,
    nom: 'Technicien HPC',
    nomPDG: 'Rémi Revire',
    adresse: '357 Avenue du Général Patton, 49000 Angers',
    logo: 'https://upload.wikimedia.org/wikipedia/en/3/36/Group_Bull_logo.png',
    url: 'http://www.bull.com/fr/front',
    siret: '64205873903320',
    nbemployes: '300',
    managementSocial: 'oui',
    email: 'entreprise@atos.net',
    password:'atos2016'
  }];
    return {
    all: function() {
      return entreprises;
    },
    remove: function(entreprise) {
      entreprises.splice(entreprises.indexOf(entreprise), 1);
    },
    get: function(entrepriseId) {
      for (var i = 0; i < entreprises.length; i++) {
        if (entreprises[i].id === parseInt(entrepriseId)) {
          return entreprises[i];
        }
      }
      return null;
    }
  };
})

.factory('Commentaire', function(){
    var commentaires = [{
        id:0,
        noteGenerale:'4/5',
        noteStage: '5/5',
        noteAmbiance: '4/5',
        commentaire: ''    
    },{
        id:1,
        noteGenerale:'3/5',
        noteStage: '4/5',
        noteAmbiance: '3/5',
        commentaire: ''    
    },{
        id:2,
        noteGenerale:'4/5',
        noteStage: '3/5',
        noteAmbiance: '4/5',
        commentaire: ''    
    }];
    return {
    get: function(commentaireId) {
      for (var i = 0; i < commentaires.length; i++) {
        if (commentaires[i].id === parseInt(commentaireId)) {
          return commentaires[i];
        }
      }
      return null;
    }
  };
    
})

.factory('Stagiaire', function(){
    var stagiaire = [{
        id:0,
        nom:'Robin',
        prenom: 'Cornec',
        adresse: '',
        email: '',    
        password: ''
    }];    
})

.factory('Document', function(){
    var documents = [{
        id:0,
        libelle:'cv',
        chemin: ''
    }];    
    return {
        add: function(document) {
        },
        remove: function(document) {
          documents.splice(documents.indexOf(document), 1);
        },
        get: function(documentId)  {
        for (var i = 0; i < documents.length; i++) {
          if (documents[i].id === parseInt(documentId)) {
            return documents[i];
          }
        }
        return null;
        }
    };
});

