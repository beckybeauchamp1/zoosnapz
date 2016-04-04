//= require angular
//= require angular-resource
//= require ui-router
//= require zoos/zoos

"use strict";

(function(){
  angular
  .module("Zoogramz", [
    "ui.router",
    "zoos"
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
  }
})();
