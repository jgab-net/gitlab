'use strict';

angular
  .module('gitlab')
  .config(function ($logProvider, toastrConfig, $httpProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    $httpProvider.defaults.useXDomain = true;

    $httpProvider.interceptors.push(
      function ($q, $window, $injector) {
        return {
          request: function(config) {

            config.headers = config.headers || {};

            config.headers['Content-Type'] = 'application/json';
            config.headers['Accept'] = 'json';

            var Token = $injector.get('Token');
            if (Token.has()) {
              config.headers['PRIVATE-TOKEN'] = Token.get();
            }
            return config;
          }
        };
      }
    );
  }
);

