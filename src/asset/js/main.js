"use strict"

angular.module('valeriovaudi', ['ui.router', "home", 'resume', "music","cs", "aboutMe","contact", "siteDirectiveModules"])
    .config(["$urlRouterProvider", function($urlRouterProvider){
        $urlRouterProvider.otherwise("/");
    }]).controller("baseCtr",["$scope", "$window", "i18nPageContentResolver", function($scope, $window, i18nPageContentResolver){
        $scope.avatar="dist/asset/images/myPhoto.jpeg";
        $scope.showHeader= $window.innerWidth > 1024;
        i18nPageContentResolver.jsonMessagesResolver("dist/asset/data/menuLabel").success(function(data){
            $scope.menuLabel = data;
        });
    }]);