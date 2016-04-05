"use strict";

(function (){
  angular
  .module("reptiles", [
    "ngResource"
  ])
  .factory("ReptileFactory", [
    "$resource",
    ReptileFactoryFunction
  ])
  .controller("ReptileIndexController", [
    "ReptileFactory",
    ReptileIndexControllerFunction
  ])
  .controller("ReptileShowController", [
    "ReptileFactory",
    "$stateParams",
    ReptileShowControllerFunction
  ]);

  function ReptileFactoryFunction($resource){
    var Reptile = $resource("/zoos/1/reptiles/:id.json", {}, {
      update: {method: "PUT"}
    });
    Reptile.all = Reptile.query();
    return Reptile;
  }

  function ReptileIndexControllerFunction(ReptileFactory){
    var ReptileIndexVM = this;
    ReptileIndexVM.reptiles = ReptileFactory.all
  }

  function ReptileShowControllerFunction(ReptileFactory, $stateParams){
    var ReptileShowVM = this;
    ReptileFactory.all.$promise.then(function(){
      ReptileFactory.all.forEach(function(reptile){
        if(reptile.id == $stateParams.id){
          ReptileShowVM.reptile = reptile;
        }
      })
    })
  }
})();
