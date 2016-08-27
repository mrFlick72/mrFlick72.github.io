/**
 * Created by valerio on 02/06/16.
 */
"use strict"

angular.module("siteDirectiveModules")
.directive("mediaObjectReader", ["i18nPageContentResolver", function(i18nPageContentResolver){
        return {
            restrict: 'E',
            templateUrl:"asset/js/directive/media-object/template.html",
            scope:{
                "mediaHeading":"=mediaHeading",
                "mediaImage":"=mediaImage",
                "hasMediaHeading":"=hasMediaHeading",
                "mediaContent":"=mediaContent"
            },
            link:function(scope){
                scope.mediaContent = i18nPageContentResolver.pageUrlResolver(scope.mediaContent);
            }
        }
    }]);