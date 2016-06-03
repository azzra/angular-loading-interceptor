
(function () {
    'use strict';

    angular.module('angular-loading-interceptor', [])

  .run(["$rootScope", "$ionicLoading", function($rootScope, $ionicLoading) {

      $rootScope.$on('loading:show', function(event, hideLoading) {
          if (!hideLoading) {
              $ionicLoading.show({
                  template: '<ion-spinner icon="spiral" class="spinner-energized"></ion-spinner>'
              });
          }
      });

      $rootScope.$on('loading:hide', function() {
          $ionicLoading.hide();
      });

  }])

  .config(['$httpProvider', function ($httpProvider) {

      $httpProvider.interceptors.push(['$q', '$rootScope', function ($q, $rootScope) {
          return {
              request: function(config) {
                  $rootScope.$broadcast('loading:show', config.hideLoading);
                  return config;
              },
              response: function(response) {
                  $rootScope.$broadcast('loading:hide');
                  return $q.resolve(response);
              },
              responseError: function(rejection) {
                  $rootScope.$broadcast('loading:hide');
                  return $q.reject(rejection);
              }
          };

      }]);

  }]);

})();
