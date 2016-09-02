"use strict"

angular.module('commonService', [])
    .value("acceptLanguages",["en", "it"])
    .value("defaultLanguage","en")
    .factory("i18nPageContentResolver",["$http", "acceptLanguages", "defaultLanguage", "$templateCache", function($http,acceptLanguages,defaultLanguage, $templateCache){

        function getServerAcceptLanguageSuffix(serverAcceptLanguage){
            return serverAcceptLanguage.map(function(item){
                return itemTransformationFnc(item.split(";")[0]);
            });
        }

        function itemTransformationFnc(item){
            return item.split("-").map(function(item){return item.toLowerCase()}).join("_");
        }

        function getIn18Resources(basePath, resourceEsxtention){
            var language = navigator.language.split("-")[0];
            language = isLanguageInConfiguredAcceptLanguageSet(language) ? language : defaultLanguage;
            return getIn18ResourcesWithDefinedLanguage(basePath, language, resourceEsxtention);
        }

        function getIn18ResourcesWithDefinedLanguage(basePath, language, resourceEsxtention){
            return basePath + "_" + language + resourceEsxtention;
        }

        function isLanguageInConfiguredAcceptLanguageSet(language){
            return acceptLanguages
                .map(function(item){return language === item;})
                .reduce(function(total, item){ return total ||  item }, false);
        }

        return {
            pageUrlResolver : function(baseUrl){
                return getIn18Resources(baseUrl, ".html");
            },
            jsonMessagesPathResolver : function(baseMessages){
                return getIn18Resources(baseMessages, ".json");
            },
            jsonMessagesResolver : function(baseMessages){
                return $http.get(this.jsonMessagesPathResolver(baseMessages), {cache:$templateCache});
            }
        };
    }]);