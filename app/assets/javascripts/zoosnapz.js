//= require angular
//= require angular-resource
//= require ui-router
//= require zoos/zoos
//= require reptiles/reptiles
//= require mammals/mammals
//= require lightwidget

"use strict";

(function(){
  angular
  .module("Zoosnapz", [
    "ui.router",
    "zoos",
    "reptiles",
    "mammals"
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ]);

  function RouterFunction($stateProvider){
    $stateProvider
    .state("zooIndex", {
      url: "/",
      template: "I am working"
    })
    .state("mammalsIndex", {
      url: "/:id/mammals",
      templateUrl: "/ng-views/mammals.index.html",
      controller: "MammalIndexController",
      controllerAs: "MammalIndexVM"
    })
    .state("reptileIndex", {
      url: "/:id/reptiles",
      templateUrl: "/ng-views/reptile.index.html",
      controller: "ReptileIndexController",
      controllerAs: "ReptileIndexVM"
    })
    .state("reptileShow", {
      url: "/reptiles/:id",
      templateUrl: "/ng-views/reptile.show.html",
      controller: "ReptileShowController",
      controllerAs: "ReptileShowVM"
    })
    .state("mammalsShow", {
      url: "/mammals/:id",
      templateUrl: "/ng-views/mammals.show.html",
      controller: "MammalShowController",
      controllerAs: "MammalShowVM"
    })
    .state("zooShow", {
      url: "/:id",
      templateUrl: "/ng-views/zoo.show.html",
      controller: "ZooShowController",
      controllerAs: "ZooShowVM"
    });
  }
})();
