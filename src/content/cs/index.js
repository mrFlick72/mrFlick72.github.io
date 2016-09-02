angular.module('cs',["commonService"])
    .config(["$stateProvider",function($stateProvider) {
        $stateProvider
            .state('cs', {
                url: '/cs',
                views: {
                    'container@': {
                        templateUrl: 'dist/content/cs/template/content.html',
                        controller : 'computerScienceController'
                    }
                }
            })
    }])
    .controller("computerScienceController",["$scope", function($scope) {
        $scope.mainContent = "dist/content/cs/data/computerScience/content";
    }]);
