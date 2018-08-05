angular.module("siteDirectiveModules")
    .value("tweetReaderBaseServiceUrl","https://valeriovaudiio-backend.cfapps.io/twitter")
    .value("tweetReaderServiceUserTimeLineUrl","https://valeriovaudiio-backend.cfapps.io/twitter/userTimeLine")
    .value("tweetReaderServiceTweetUrl","https://valeriovaudiio-backend.cfapps.io/twitter/tweet")
    .value("tweetReaderServiceUserDetailsUrl","https://valeriovaudiio-backend.cfapps.io/twitter/user/details")
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