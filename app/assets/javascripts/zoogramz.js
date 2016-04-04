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
    .state("zooShow", {
      url: "/:id",
      templateUrl: "/ng-views/zoo.show.html",
      controller: "ZooShowController",
      controllerAs: "ZooShowVM"
    })
    .state("mammalsIndex", {
      url: "/mammals",
      template: "I am the mammals index template",
      controller: "MammalIndexController",
      controllerAs: "MammalIndexVM"
    });
  }
})();
