'use strict';

angular
  .module('gitlab')
  .controller('UsersController', function () {

    var vm = this;

    vm.userSelected = {};

    vm.show = function () {
      console.log(vm.userSelected);
    }

  });
