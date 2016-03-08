/* global moment:false */

'use strict';

angular
  .module('gitlab')
  .constant('moment', moment)
  .constant('baseUrl', 'https://gitlab.com/api/v3/');
