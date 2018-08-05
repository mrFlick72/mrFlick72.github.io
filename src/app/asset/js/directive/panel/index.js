/**
 * Created by valerio on 02/06/16.
 */
"use strict"

angular.module("siteDirectiveModules")
.directive("panelReader", ["i18nPageContentResolver", function(i18nPageContentResolver){
        return {
            restrict: 'E',
            templateUrl:"dist/asset/js/directive/panel/template.html",
            scope:{
                "panelHeader":"=panelHeader",
                "panelContent":"=panelContent"
            },
            link:function(scope){
                scope.panelContent = i18nPageContentResolver.pageUrlResolver(scope.panelContent);
            }
        }
    }]);