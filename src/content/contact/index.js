angular.module('contact',["commonService"])
    .value("mailServiceUrl","http://localhost:3000/mail")
    .config(["$stateProvider",function($stateProvider) {
        $stateProvider
            .state('root.contact', {
                url: '/contact',
                views: {
                    'container@': {
                        templateUrl: 'dist/content/contact/template/content.html',
                        controller:"contactController"
                    }
                }
            });
    }])
    .controller("contactController",["$scope", "$http", "mailServiceUrl", "i18nPageContentResolver",
        function($scope, $http, mailServiceUrl, i18nPageContentResolver) {

        $scope.sendMail = function(){
            $http.post(mailServiceUrl, $scope.mailMessage)
                .then(function(){
                    showOutcomeMailSendingModal(true);
                    $scope.mailMessage  = {};
                },function () {
                    showOutcomeMailSendingModal(false);
                })
        };

        function showOutcomeMailSendingModal(outcome){
            $scope.mailSendIsSuccess=outcome;
            var outcomeMailSendingModal = document.getElementById("outcomeMailSendingModal");
            angular.element(outcomeMailSendingModal).modal("show");
            console.log("fine showOutcomeMailSendingModal");
        }

        $scope.init = function(){
            i18nPageContentResolver.jsonMessagesResolver("dist/content/contact/data/messages").then(function(data){$scope.messages = data.data});
        };
    }]);