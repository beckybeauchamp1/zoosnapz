"use strict";

(function(){
  angular
  .module("zoos", [
    "ngResource"
  ])
  .factory("ZooFactory", [
    "$resource",
    ZooFactoryFunction
  ])
  .controller("ZooShowController", [
    "ZooFactory",
    "$stateParams",
    ZooShowControllerFunction
  ])
  .directive("animalsShow", function(){
    return {
      templateUrl: "/ng-views/_animals_show.html",
      scope: {
        animal: '='
      }
    };
  })

  function ZooFactoryFunction($resource){
    var ZooFactory = $resource("/zoos/:id.json", {}, {
      update: {method: "PUT"}
    });
    ZooFactory.all = ZooFactory.query();
    return ZooFactory;
  }

  function ZooShowControllerFunction(ZooFactory, $stateParams){
    var ZooShowVM = this;
    ZooFactory.all.$promise.then(function(){
      ZooFactory.all.forEach(function(zoo){
        if(zoo.id == $stateParams.id){
          ZooShowVM.zoo = zoo;
        }
      })
    })
  }
})();
