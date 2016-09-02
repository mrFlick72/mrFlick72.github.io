"use strict"

angular.module('valeriovaudi', ['ngSanitize', 'ui.router', "home", 'resume', "music","cs", "aboutMe","contact", "siteDirectiveModules"])
    .config(["$urlRouterProvider", function($urlRouterProvider){
        $urlRouterProvider.otherwise("/");
    }]).controller("baseCtr",["$scope", "i18nPageContentResolver", function($scope, i18nPageContentResolver){
        $scope.avatar="dist/asset/images/myPhoto.jpeg";
        i18nPageContentResolver.jsonMessagesResolver("dist/asset/data/menuLabel").success(function(data){
            $scope.menuLabel = data;
        });

        console.log($scope.menuLabel)
    }]);