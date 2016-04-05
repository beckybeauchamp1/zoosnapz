//= require angular
//= require angular-resource
//= require ui-router
//= require zoos/zoos
//= require mammals/mammals

"use strict";

(function(){
  angular
  .module("Zoogramz", [
    "ui.router",
    "zoos",
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
    .state("zooShow", {
      url: "/:id",
      templateUrl: "/ng-views/zoo.show.html",
      controller: "ZooShowController",
      controllerAs: "ZooShowVM"
    });
  }
})();
