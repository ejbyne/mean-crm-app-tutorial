angular.module('userApp', [
  'ngAnimate',
  'appRoutes',
  'authService',
  'mainCtrl',
  'userCtrl',
  'userService'
])

.config(function($httpProvider) {
  $httpProvider.interceptors.push('AuthInterceptor');
});
