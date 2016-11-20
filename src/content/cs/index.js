angular.module('cs',["commonService"])
    .value("gitHubServiceUrl","http://localhost:3000/github")
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
    .controller("computerScienceController",["$scope","$http","gitHubServiceUrl", function($scope,$http,gitHubServiceUrl) {
        $scope.initComputerScienceSection = function() {
            $http.get(gitHubServiceUrl+"/repo",{cache: true}).then(function (data) {
                $scope.projects = data.data.body;
            });
        };
        $scope.initComputerScienceSection();

        $scope.projectAvatarUrl = "dist/asset/images/java.jpg";
        $scope.mainContent = "dist/content/cs/data/computerScience/content";
    }]);
