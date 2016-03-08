'use strict';

angular
  .module('gitlab')
  .run(function ($rootScope, $state) {

    $rootScope.$on('$stateChangeError',
      function (event, toState, toParams, fromState, fromParams, error) {
        if (angular.isString(error)) {
          event.preventDefault();
          switch (error) {
            case 'NotAuthorized':
              $state.go('anon.access');
              break;
            case 'NotAnon':
              $state.go('user.projects');
              break;
          }
        }
      }
    );

  });


