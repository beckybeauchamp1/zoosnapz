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
      url: "/zoo/:id",
      templateUrl: "app/views/zoos/show.html.erb",
      controller: "ZooShowController",
      controllerAs: "ZooShowVM"
    })
  }
})();
