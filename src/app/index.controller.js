  'use strict';

angular
  .module('gitlab')
  .controller('IndexController', function (Token) {

    var vm = this;

    vm.hasToken = function () {
      return Token.has();
    };

    vm.exit = function () {
      Token.remove();
    };

  });

