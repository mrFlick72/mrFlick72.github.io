angular.module("siteDirectiveModules")
    .value("tweetReaderBaseServiceUrl","http://localhost:3000/twitter")
    .value("tweetReaderServiceUserTimeLineUrl","http://localhost:3000/twitter/userTimeLine")
    .value("tweetReaderServiceTweetUrl","http://localhost:3000/twitter/tweet")
    .value("tweetReaderServiceUserDetailsUrl","http://localhost:3000/twitter/user/details")
    .directive("tweetReader", ["$http", "$sce", "tweetReaderServiceUserTimeLineUrl", "tweetReaderServiceTweetUrl", "tweetReaderServiceUserDetailsUrl",
        function($http, $sce, tweetReaderServiceUserTimeLineUrl, tweetReaderServiceTweetUrl, tweetReaderServiceUserDetailsUrl){
        return {
            restrict: 'E',
            templateUrl:"dist/asset/js/directive/twitter-reader/template.html",
            scope:{ },
            link: function(scope) {
                scope.tweets = [];
                scope.trustSrc = function (src) {
                    return $sce.trustAsResourceUrl(src);
                };

                getTweet = function (idStr, result) {
                    $http.get([tweetReaderServiceTweetUrl, idStr].join("/"),{cache:true})
                        .then(function(response) {
                            result.push(response.data.html);
                        });
                };

                $http.get(tweetReaderServiceUserTimeLineUrl, {cache: true})
                    .then(function (response) {
                        tweets = response.data;
                        angular.forEach(tweets, function(value, key) {
                            getTweet(value.idStr, scope.tweets);
                        });
                    });

                $http.get(tweetReaderServiceUserDetailsUrl, {cache: true})
                    .then(function (response) {
                        scope.userDetails = response.data;
                    })
            }
        }
    }]);