'use strict';

angular
  .module('gitlab')
  .service('Token', function ($window) {

    this.set = function (token) {
      $window.sessionStorage.setItem('token', token);
    };

    this.get = function () {
      return $window.sessionStorage.getItem('token');
    };

    this.has = function () {
      return !!$window.sessionStorage.getItem('token');
    };

    this.remove = function () {
      $window.sessionStorage.removeItem('token');
    };
  });
