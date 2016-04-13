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
  ])
  .controller("MammalShowController", [
    "MammalFactory",
    "$stateParams",
    MammalShowControllerFunction
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

  function MammalShowControllerFunction(MammalFactory, $stateParams){
    // Same here, maybe using :MamalFactory.get({id: $stateParams.id}) ?
    var MammalShowVM = this;
    MammalFactory.all.$promise.then(function(){
      MammalFactory.all.forEach(function(mammal){
        if(mammal.id == $stateParams.id){
          MammalShowVM.mammal = mammal;
        }
      })
    })

  }

})();
