'use strict';

angular
  .module('gitlab')
  .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('anon', {
        abstract: true,
        template: '<div ui-view></div>',
        resolve: {
          logged: function ($q, $injector) {
            if ($injector.get('Token').has()) {
              return $q.reject("NotAnon");
            }
          }
        }
      })
      .state('anon.access', {
        url: '/access',
        templateUrl: 'app/access/access.html',
        controller: 'AccessController',
        controllerAs: 'controller'
      });

    $stateProvider
      .state('user', {
        abstract: true,
        template: '<div ui-view></div>',
        resolve: {
          security: function($q, $injector){
            if (!$injector.get('Token').has()) {
              return $q.reject('NotAuthorized');
            }
          }
        }
      })
      .state('user.projects', {
        url: '/projects',
        templateUrl: 'app/projects/projects.html',
        controller: 'ProjectsController',
        controllerAs: 'controller'
      })
      .state('user.users', {
        url: '/users',
        templateUrl: 'app/users/users.html',
        controller: 'UsersController',
        controllerAs: 'controller'
      });

    $urlRouterProvider.otherwise('/access');
  }
);
