"use strict"

angular.module('resume',["commonService"])
    .config(["$stateProvider", function($stateProvider){
        $stateProvider.state('root.resume', {
            url: '/resume',
            views: {
                'container@': {
                    templateUrl: 'content/resume/template/content.html',
                    controller : 'resumeController'
                }
            }
        }).state('root.resume.personalDetails', {
            templateUrl: 'content/resume/template/personalDetailsContent.html',
            controller : ["$http", "$scope", "i18nPageContentResolver", function($http, $scope, i18nPageContentResolver){
                i18nPageContentResolver.jsonMessagesResolver('content/resume/data/personalDetailsResumeData/data')
                    .success(function(data){
                        $scope.personalDetailsData=data;
                    });
            }]
        }).state('root.resume.education', {
            templateUrl: 'content/resume/template/educationContent.html',
            controller : ["$http", "$scope", "i18nPageContentResolver", function($http, $scope, i18nPageContentResolver){
                i18nPageContentResolver.jsonMessagesResolver('content/resume/data/educationsResumeData/data')
                    .success(function(data){
                        $scope.educationsData=data;
                    });
            }]
        }).state('root.resume.skills', {
            templateUrl: 'content/resume/template/skillContent.html',
            controller : ["$http", "$scope", "i18nPageContentResolver", function($http, $scope, i18nPageContentResolver){
                i18nPageContentResolver.jsonMessagesResolver('content/resume/data/skillsResumeData/data')
                    .success(function(data){
                        $scope.skillsData=data;
                    });
            }]
        }).state('root.resume.workExperience', {
            templateUrl: 'content/resume/template/workExperienceContent.html',
            controller : ["$http", "$scope", "i18nPageContentResolver", function($http, $scope, i18nPageContentResolver){
                $scope.i18nPageContentResolver = i18nPageContentResolver;

                i18nPageContentResolver.jsonMessagesResolver('content/resume/data/workExperienceResumeData/data')
                    .success(function(data){
                        $scope.workExperiencesData=data;
                    });
            }]
        }).state('root.resume.languageSkills', {
            templateUrl: 'content/resume/template/languageSkillsContent.html',
            controller : ["$http", "$scope", "i18nPageContentResolver", function($http, $scope, i18nPageContentResolver){
                i18nPageContentResolver.jsonMessagesResolver('content/resume/data/languageSkillsResumeData/messages')
                    .success(function(data){
                        $scope.languageSkillsMessages=data;
                    });

                i18nPageContentResolver.jsonMessagesResolver('content/resume/data/languageSkillsResumeData/data')
                    .success(function(data){
                        $scope.languageSkills=data;
                    });
            }]
        })
    }])
    .controller("resumeController", ["$scope", "$state", function($scope,$state) {
        $scope.paginationInfo = {leftColumnOffset:"",leftColumnSize:"col-lg-3 col-md-3 col-sm-12 col-xs-12",rightColumnSize:"col-lg-9 col-md-9 col-sm-12 col-xs-12"};
        $state.go("root.resume.personalDetails");
    }]);
