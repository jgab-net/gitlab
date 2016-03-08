'use strict';

angular
  .module('gitlab')
  .service('API', function (baseUrl) {

    var toUrl = function (path) {
      return baseUrl + path;
    };

    this.projects = toUrl('projects/:id');
  });
