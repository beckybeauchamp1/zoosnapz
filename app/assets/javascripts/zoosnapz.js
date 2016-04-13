//= require angular
//= require angular-resource
//= require ui-router
//= require angular-ui-bootstrap
//= require zoos/zoos
//= require reptiles/reptiles
//= require mammals/mammals
//= require lightwidget

"use strict";
// Great job here, everything is so clean and organized :)

(function(){
  angular
  .module("Zoosnapz", [
    "ui.router",
    "ui.bootstrap",
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
      template: "<a data-ui-sref='zooShow({id: 1})'>Click here for Smithsonian National Zoo</a>"
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
