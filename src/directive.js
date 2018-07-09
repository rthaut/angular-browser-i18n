/**
 * angular-browser-i18n - AngularJS directives for utilizing native internationalization (i18n) functionality within browser extensions
 * @version v1.0.0
 * @link https://github.com/rthaut/angular-browser-i18n#readme
 * @license MIT
 */

/* global angular */
var i18nModule = angular.module('browser.i18n', []);

i18nModule.factory('i18nService', function () {

    var browserObject = ((typeof browser !== 'undefined') && (typeof browser.i18n !== 'undefined')) ? browser : chrome;
    
    /**
     * Wrapper function for the getMessage() functionality
     * @param {string} messageName the name of the message to retrieve
     * @param {string[]} [substitutions] the array of substitutions to use in the retrieved message
     */
    var getMessage = function (messageName, substitutions) {
        return browserObject.i18n.getMessage(messageName, substitutions);
    };

    /**
     * Function for the link property of the directives for the getMessage() functionality
     * @param {object} scope the directive's scope
     * @param {object} element the element for which the directive was invoked
     */
    var getMessageLinkFn = function (scope, element) {
        var _message = scope.message;
        var _substitutions = scope.substitutions || [];

        function setMessage() {
            element.html(getMessage(_message, _substitutions));
        }

        scope.$watch('message', function (message) {
            _message = message;
            setMessage();
        });

        scope.$watch('substitutions', function (substitutions) {
            _substitutions = substitutions;
            setMessage();
        });

        setMessage();
    };

    return {
        'getMessage': getMessage,
        'getMessageLinkFn': getMessageLinkFn
    };

});

/**
 * Directive for the <i18n> element
 * @property string message - the name of the message to retrieve
 * @property array substitutions - the array of substitutions to use in the retrieved message
 * @usage <i18n message="msgName" substitutions="['sub1', 'sub2']"></i18n>
 */
i18nModule.directive('i18n', ['i18nService', function (i18nService) {
    return {
        'restrict': 'E',
        'scope': {
            'message': '=',
            'substitutions': '='
        },
        'link': i18nService.getMessageLinkFn
    };
}]);

/**
 * Directive for the getMessage attribute
 * @property string get-message - the name of the message to retrieve
 * @property array substitutions - the array of substitutions to use in the retrieved message
 * @usage <ANY get-message="msgName" substitutions="['sub1', 'sub2']"></ANY>
 */
i18nModule.directive('getMessage', ['i18nService', function (i18nService) {
    return {
        'restrict': 'A',
        'scope': {
            'message': '=getMessage',
            'substitutions': '='
        },
        'link': i18nService.getMessageLinkFn
    };
}]);