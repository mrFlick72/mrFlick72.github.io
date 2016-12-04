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
    .factory("computerScienceService",function () {
        // todo
    })
    .controller("computerScienceController",["$rootScope", "$scope","$http","gitHubServiceUrl", function($rootScope,$scope,$http,gitHubServiceUrl) {
        $scope.initComputerScienceSection = function() {
            $http.get(gitHubServiceUrl+"/repo",{cache: true}).then(function (data) {
                $scope.projects = data.data.body;
            });
        };

        $scope.initComputerScienceSection();
        console.log("just before initCsSection event fired")

        $scope.$on("initCsSection",function (event, arg) {
            console.log("initCsSection event fired")
            $scope.initComputerScienceSection();
        });

        $scope.projectAvatarUrl = "dist/asset/images/java.jpg";
        $scope.mainContent = "dist/content/cs/data/computerScience/content";
    }]);
