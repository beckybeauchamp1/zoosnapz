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
  .controller("ModalController", function ($scope) {
    $scope.showModal = false;
    $scope.toggleModal = function(){
        $scope.showModal = !$scope.showModal;
    };
  })
  .directive("animalsShow", function(){
    return {
      templateUrl: "/ng-views/_animals_show.html",
      scope: {
        animal: '='
      }
    };
  })
  .directive("modal", function () {
    return {
      templateUrl: "/ng-views/zoo.modal.html",
      restrict: 'E',
      transclude: true,
      replace:true,
      scope:true,
      link: function postLink(scope, element, attrs) {
        scope.title = attrs.title;
        scope.$watch(attrs.visible, function(value){
          if(value === true)
            $(element).modal('show');
          else
            $(element).modal('hide');
        });
        $(element).on('shown.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = true;
          });
        });
        $(element).on('hidden.bs.modal', function(){
          scope.$apply(function(){
            scope.$parent[attrs.visible] = false;
          });
        });
      }
    };
  });

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
