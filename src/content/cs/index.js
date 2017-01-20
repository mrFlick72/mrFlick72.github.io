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
    .controller("computerScienceController",["$rootScope", "$scope","$http","gitHubServiceUrl", function($rootScope,$scope,$http,gitHubServiceUrl) {
        $scope.initComputerScienceSection = function(url) {
            var urlAux = url != undefined ? url : gitHubServiceUrl+"/repo";
            $http.get(urlAux,{cache: true}).then(function (data) {
                $scope.projects = data.data.body;
                $scope.links = data.data['_links'];

                checkPageNavigationStatus();
            });
        };



        $scope.getPage = function (direction) {
            $scope.initComputerScienceSection($scope.links[direction].href);

            checkPageNavigationStatus();
        };

        var checkPageNavigationStatus = function(){
            $scope.isFirstPage = !$scope.links['first'];

            $scope.hasPreviousPage = !$scope.links['previous'];
            $scope.hasNextPage = !$scope.links['next'];

            $scope.isLastPage = !$scope.links['last'];
        };

        $scope.initComputerScienceSection();
        $scope.projectAvatarUrl = "dist/asset/images/java.jpg";
    }]);
