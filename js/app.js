var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'ngCordova']);

app.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/login");
    //
    // Now set up the states
    $stateProvider
      .state('login', {
          url: "/login",
          templateUrl: "src/partial/login.html",
          controller: "LoginCTRL"
      })
     .state('accueil', {
         url: "/accueil",
         templateUrl: "src/partial/accueil.html",
         controller: "AccueilCTRL"
     })
    .state('etatStock', {
        url: "/etatStock",
        templateUrl: "src/partial/etatStock.html",
        controller: "EtatStockCTRL"
    });
});
