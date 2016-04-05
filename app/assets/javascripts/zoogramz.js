//= require angular
//= require angular-resource
//= require ui-router
//= require zoos/zoos
//= require reptiles/reptiles

"use strict";

(function(){
  angular
  .module("Zoogramz", [
    "ui.router",
    "zoos",
    "reptiles"
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
    .state("zooShow", {
      url: "/:id",
      templateUrl: "/ng-views/zoo.show.html",
      controller: "ZooShowController",
      controllerAs: "ZooShowVM"
    })
    .state("reptileIndex", {
      url: "/:id/reptiles",
      templateUrl: "/ng-views/reptile.index.html",
      controller: "ReptileIndexController",
      controllerAs: "ReptileIndexVM"
    })
  }
})();
