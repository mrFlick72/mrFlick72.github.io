"use strict"

angular.module('valeriovaudi', ['ui.router', "home", 'resume', "music","cs", "aboutMe","contact", "siteDirectiveModules"])
    .config(["$urlRouterProvider", function($urlRouterProvider){
        $urlRouterProvider.otherwise("/");
    }]).controller("baseCtr",["$rootScope", "$scope", "i18nPageContentResolver", function($rootScope, $scope, i18nPageContentResolver){
        $scope.avatar="dist/asset/images/myPhoto.jpeg";
        i18nPageContentResolver.jsonMessagesResolver("dist/asset/data/menuLabel").then(function(response){
            $scope.menuLabel = response.data;
        });
    }]);