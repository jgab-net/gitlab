'use strict';

angular
  .module('gitlab')
  .controller('AccessController', function (Token, $state) {
    var vm = this;

    vm.user = {
      token: 'EY9ZrzzpiFxgFnh75pz9'
    };

    vm.access = function (isValid) {
      if (isValid) {
        Token.set(vm.user.token);
        $state.go('user.projects');
      }
    };

  });
