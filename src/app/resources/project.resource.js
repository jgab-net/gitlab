'use strict';

angular
  .module('gitlab')
  .factory('Project', function ($resource, API) {
    return $resource(API.projects, {
      id: '@id'
    }, {

    });
  });
