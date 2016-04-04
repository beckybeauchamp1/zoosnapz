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
  ]);

  function ReptileFactoryFunction($resource){
    var Reptile = $resource("/reptiles/:id.json", {}, {
      update: {method: "PUT"}
    });
    Reptile.all = Reptile.query();
    return Reptile
  }

  function ReptileIndexControllerFunction(ReptileFactory){
    var ReptileIndexVM = this;
    ReptileIndexVM.reptiles = Reptile.all
  }
})();
