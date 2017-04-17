const freelance = {
  name: 'freelance',
  repertories: [],
  files: [
    '-rw-r--r-- 07/2015-08/2016 Création d’une application web de gestion de camions pour Tapir, Clermont-Ferrrand. [PHP5, CodeIgniter, AngularJS, Bootstrap]',
    '-rw-r--r-- 05/2016-08/2016 Création d’une application web de gestion de projet pour Probioniov, Clermont-Ferrand. [PHP5, CodeIgniter, JQuery, Bootstrap]',
  ],
};

const emploi = {
  name: 'emploi',
  repertories: [],
  files: [
    '-rw-r--r-- 08/2016-08/2017 [Alternance] Développeur d\'application web et mobile à CGI. [Javascript, AngularJS, Ionic, Groovy, Grails]',
    '-rw-r--r-- 07/2014-08/2014 Développeur Java à l’institut de médecine du travail de Clermont-Ferrand. [Java, Swing, Xml]',
  ],
};

const stage = {
  name: 'stage',
  repertories: [],
  files: [
    '-rw-r--r-- 04/2016-08/2016 Développeur JEE à Worldline, Villeurbanne. [Java, Spring, Tapestry, SQL, Hibernate]',
    '-rw-r--r-- 04/2014-06/2014 Développeur Java à l’institut de médecine du travail de Clermont-Ferrand. [Java, Swing, Xml]',
  ],
};

const experience = {
  name: 'experience',
  repertories: [
    freelance,
    emploi,
    stage,
  ],
  files: [],
};

const competences = {
  name: 'competences',
  repertories: [],
  files: [
    '-rw-r--r-- Java/JEE',
    '-rw-r--r-- PHP5',
    '-rw-r--r-- NodeJS',
    '-rw-r--r-- SQL',
    '-rw-r--r-- HTML5/CSS3/SASS',
    '-rw-r--r-- JavaScript/ES6',
  ],
};

const formation = {
  name: 'formation',
  repertories: [],
  files: [
    '-rw-r--r-- 2017 Diplôme d’ingénieur de l’ISIMA en informatique, option réseaux et sécurité, Clermont-Ferrand.',
    '-rw-r--r-- 2014 Diplôme universitaire de technologie en informatique, option génie logiciel, Clermont-Ferrand.',
    '-rw-r--r-- 2012 Baccalauréat Scientifique mention assez bien au lycée Sévigné Saint-Louis d’Issoire.',
  ],
};

const FileSystem = {
  name: '~',
  repertories: [
    experience,
    competences,
    formation,
  ],
  files: [
    'hello.jpg',
  ],
};

export default FileSystem;
