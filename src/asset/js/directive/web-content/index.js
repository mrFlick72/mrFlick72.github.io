/**
 * Created by valerio on 02/06/16.
 */
"use strict"

angular.module("siteDirectiveModules")
.directive("webContentReader", ["i18nPageContentResolver", function(i18nPageContentResolver){
        return {
            restrict: 'E',
            templateUrl:"dist/asset/js/directive/web-content/template.html",
            scope:{
                "avatar":"=avatar",
                "body":"=body"
            },
            link: function(scope) {
                scope.body = i18nPageContentResolver.pageUrlResolver(scope.body);
            }
        }
    }]);