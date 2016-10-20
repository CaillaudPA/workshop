angular.module('starter.services', [])

.factory('Annonces', function() {
  var annonces = [{
    id: 0,
    titre: 'Développeur web junior',
    niveau: 'You on your way?',
    primeStage: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
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
    id: 1,
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
    id: 2,
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
    id: '3',
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
    id: 0,
    nom: 'Développeur web junior',
    nomPDG: 'You on your way?',
    adresse: 'img/ben.png',
    logo: 'img/ben.png',
    url: 'www..com',
    siret: '',
    nbemployes: '',
    managementSocial: '',
    email: 'entreprise@',
    password:''
  }, {
    id: 0,
    nom: 'Développeur web junior',
    nomPDG: 'You on your way?',
    adresse: 'img/ben.png',
    logo: 'img/ben.png',
    url: 'www..com',
    siret: '',
    nbemployes: '',
    managementSocial: '',
    email: 'entreprise@',
    password:''
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
    var commentaire = [{
        id:'',
        noteGenerale:'',
        noteStage: '',
        noteAmbiance: '',
        commentaire: ''    
    }];
    return {
    get: function(commentaireId) {
      for (var i = 0; i < commentaire.length; i++) {
        if (commentaire[i].id === parseInt(commentaireId)) {
          return commentaire[i];
        }
      }
      return null;
    }
  };
    
})

.factory('Stagiaire', function(){
    var stagiaire = [{
        id:'',
        nom:'',
        prenom: '',
        adresse: '',
        email: '',    
        password: ''
    }];    
})

.factory('Document', function(){
    var document = [{
        id:'',
        libelle:'',
        chemin: ''
    }];    
});