var testApp = angular.module('testApp', ['browser.i18n']);

testApp.controller('TestCtrl', function ($scope) {
    $scope.message = "TestMessage01";
    $scope.replacements = [];

    $scope.getWindowDimension = function (dimension) {
        return (window !== undefined && window[`outer${dimension}`] !== undefined) ? window[`outer${dimension}`] : -1;
    }
});