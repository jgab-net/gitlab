'use strict';

angular
  .module('lvDirectives', [])
  .directive('lvSearch', function ($http) {
    return {
      scope: {
        value: '='
      },
      templateUrl: 'app/components/search/search.html',
      controller: function ($scope, $element, $attrs) {

        this.find = function (val) {
          $http({
            url: 'https://gitlab.com/api/v3/users?search='+val,
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'json',
              'PRIVATE_TOKEN': 'EY9ZrzzpiFxgFnh75pz9'
            }
          }).success(function (response) {
            $scope.users = response;
          })
        };

        $scope.select = function (user) {
          $scope.value = user;
        };

      },
      link: function (scope, element, attr, controller) {
        var $input = element.find('#search');

        $input.on('input', function () {
          var val = $input.val();
          if (val.length >= 3){
            controller.find(val);
          }
        });
      }
    };
  });

