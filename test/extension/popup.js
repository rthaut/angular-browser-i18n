var testApp = angular.module('testApp', ['browser.i18n']);

testApp.controller('TestCtrl', function ($scope) {
    $scope.message = "TestMessage01";
    $scope.replacements = [];
});