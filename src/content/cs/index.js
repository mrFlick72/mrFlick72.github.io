angular.module('cs',["commonService"])
    .config(["$stateProvider",function($stateProvider) {
        $stateProvider
            .state('root.cs', {
                url: '/cs',
                views: {
                    'container@': {
                        templateUrl: 'content/cs/template/content.html',
                        controller : 'computerScienceController'
                    }
                }
            })
    }])
    .controller("computerScienceController",["$scope", function($scope) {
        $scope.mainContent = "content/cs/data/computerScience/content";
    }]);
