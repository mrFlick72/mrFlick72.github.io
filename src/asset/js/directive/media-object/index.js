/**
 * Created by valerio on 02/06/16.
 */
"use strict"

angular.module("siteDirectiveModules")
.directive("mediaObjectReader", ["i18nPageContentResolver", "$http", "$templateCache", function(i18nPageContentResolver, $http, $templateCache){
        return {
            restrict: 'E',
            templateUrl:"dist/asset/js/directive/media-object/template.html",
            scope:{
                "mediaHeading":"=mediaHeading",
                "mediaImage":"=mediaImage",
                "hasMediaHeading":"=hasMediaHeading",
                "mediaContent":"=mediaContent"
            },
            link:function(scope){
                //scope.mediaContent = i18nPageContentResolver.pageUrlResolver(scope.mediaContent);
                $http.get(i18nPageContentResolver.pageUrlResolver(scope.mediaContent), {cache:$templateCache})
                    .then(function(response){
                        scope.mediaContentData = response.data;
                    })
            }
        }
    }]);