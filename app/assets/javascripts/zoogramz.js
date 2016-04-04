//= require angular
//= require angular-resource
//= require ui-router

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
    .state("zooShow", {
      url: "/zoos/:id",
      templateUrl: "ng-views/zoos.show.html",
      controller: "ZooShowController",
      controllerAs: "ZooShowVM"
    })
  }
})();
