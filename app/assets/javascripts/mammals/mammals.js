"use strict";

(function(){
  angular
  .module("mammals", [
    "ngResource"
  ])
  .factory("MammalFactory", [
    "$resource",
    MammalFactoryFunction
  ])
  .controller("MammalIndexController", [
    "MammalFactory",
    MammalIndexControllerFunction
  ]);

  function MammalFactoryFunction($resource){
    var MammalFactory = $resource("/zoos/1/mammals.json", {}, {
      update: {method: "PUT"}
    });
    MammalFactory.all = MammalFactory.query();
    return MammalFactory;
  }

  function MammalIndexControllerFunction(MammalFactory){
    var MammalIndexVM = this;
    MammalIndexVM.mammals = MammalFactory.all;
    MammalIndexVM.newMammalFactory = new MammalFactory();
  }
})();
