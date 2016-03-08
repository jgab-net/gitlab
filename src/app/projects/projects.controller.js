'use strict';

angular
  .module('gitlab')
  .controller('ProjectsController', function (Project) {
    var vm = this;

    vm.projects = Project.query();

  });
