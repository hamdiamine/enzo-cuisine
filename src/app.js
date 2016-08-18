var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/accueil");
    //
    // Now set up the states
    $stateProvider
      .state('accueil', {
          url: "/accueil",
          templateUrl: "src/partial/accueil.html",
          controller: "AccueilCtrl"
      })
     .state('blog', {
         url: "/blog",
         templateUrl: "src/partial/blog.html",
         controller: "BlogCtrl"
     })
    .state('gallerie', {
        url: "/gallerie",
        templateUrl: "src/partial/gallerie.html",
        controller: "GallerieCtrl"
    })
    .state('mail', {
        url: "/mail",
        templateUrl: "src/partial/mail.html",
        controller: "MailCtrl"
    })
    .state('single', {
        url: "/single",
        templateUrl: "src/partial/single.html",
        controller: "SingleCtrl"
    })
    .state('shortCodes', {
        url: "/shortCodes",
        templateUrl: "src/partial/shortCodes.html",
        controller: "ShortCodesCtrl"
    });
});
