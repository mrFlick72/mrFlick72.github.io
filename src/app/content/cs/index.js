angular.module('cs', ["commonService"])
    .value("gitHubServiceUrl", "https://valeriovaudiio-backend.cfapps.io/github")
    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider
            .state('cs', {
                url: '/cs',
                views: {
                    'container@': {
                        templateUrl: 'dist/content/cs/template/content.html',
                        controller: 'computerScienceController'
                    }
                }
            })
    }])
    .controller("computerScienceController", ["$rootScope", "$scope", "$http", "gitHubServiceUrl", function ($rootScope, $scope, $http, gitHubServiceUrl) {
        $scope.initComputerScienceSection = function (url) {
            var urlAux = url !== undefined ? url : gitHubServiceUrl + "/repo";
            $http.get(urlAux, {cache: true}).then(function (response) {
                var data = response.data;
                $scope.currentPage = data.page;
                $scope.totalPages = (function () {
                    var totalPages = [];
                    for (var i = 0; i < data.total;) {
                        totalPages.push("page-" + ++i);
                    }
                    return totalPages;
                })();

                $scope.projects = data["_embedded"];
                $scope.links = data['_links'];
            });
        };

        $scope.getPage = function (direction) {
            var directionLink = $scope.links[direction];
            if (directionLink) {
                $scope.initComputerScienceSection(directionLink.href);
            }
        };

        $scope.initComputerScienceSection();
        $scope.projectAvatarUrl = "dist/asset/images/java.jpg";
    }]);
