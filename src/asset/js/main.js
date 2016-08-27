"use strict"

angular.module('valeriovaudi', ['ngCookies', 'ui.router', "home", 'resume', "music","cs", "aboutMe","contact", "siteDirectiveModules"])
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('root',{
                url: '',
                abstract: true,
                views: {
                    'header': {
                        templateUrl: 'dist/template/header.html'
                    },
                    'menu':{
                        templateUrl: 'dist/template/menu.html'
                    },
                    'footer':{
                        templateUrl: 'dist/template/footer.html'
                    }
                }
            });
    }]).controller("baseCtr",["$scope", "i18nPageContentResolver", function($scope, i18nPageContentResolver){
        $scope.avatar="dist/asset/images/myPhoto.jpeg";
        i18nPageContentResolver.jsonMessagesResolver("dist/asset/data/menuLabel").success(function(data){
            $scope.menuLabel = data;
        });

        console.log($scope.menuLabel)
    }]);