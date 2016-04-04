"use strict";

(function(){
  angular
  .module("zoos", [
    "ngResource"
  ])
  .factory("ZooFactory", [
    "$resource",
    ZooFactoryFunction
  ]);

  function ZooFactoryFunction($resource){
    var ZooFactory = $resource("/zoos/:id.json", {}, {
      update: {method: "PUT"}
    });
    ZooFactory.all = ZooFactory.query();
    return ZooFactory;
  }
})();
