"use strict"

angular.module('resume', ["commonService"])
    .config(["$stateProvider", function ($stateProvider) {
        $stateProvider.state('resume', {
            url: '/resume',
            views: {
                'container@': {
                    templateUrl: 'dist/content/resume/template/content.html',
                    controller: 'resumeController'
                }
            }
        }).state('resume.personalDetails', {
            templateUrl: 'dist/content/resume/template/personalDetailsContent.html',
            controller: ["$http", "$scope", "i18nPageContentResolver", function ($http, $scope, i18nPageContentResolver) {
                i18nPageContentResolver.jsonMessagesResolver('dist/content/resume/data/personalDetailsResumeData/data')
                    .then(function (response) {
                        $scope.personalDetailsData = response.data;
                    });
            }]
        }).state('resume.education', {
            templateUrl: 'dist/content/resume/template/educationContent.html',
            controller: ["$http", "$scope", "i18nPageContentResolver", function ($http, $scope, i18nPageContentResolver) {
                i18nPageContentResolver.jsonMessagesResolver('dist/content/resume/data/educationsResumeData/data')
                    .then(function (response) {
                        $scope.educationsData = response.data;
                    });
            }]
        }).state('resume.skills', {
            templateUrl: 'dist/content/resume/template/skillContent.html',
            controller: ["$http", "$scope", "i18nPageContentResolver", function ($http, $scope, i18nPageContentResolver) {
                i18nPageContentResolver.jsonMessagesResolver('dist/content/resume/data/skillsResumeData/data')
                    .then(function (response) {
                        $scope.skillsData = response.data;
                    });
            }]
        }).state('resume.workExperience', {
            templateUrl: 'dist/content/resume/template/workExperienceContent.html',
            controller: ["$http", "$scope", "i18nPageContentResolver", function ($http, $scope, i18nPageContentResolver) {
                $scope.i18nPageContentResolver = i18nPageContentResolver;

                i18nPageContentResolver.jsonMessagesResolver('dist/content/resume/data/workExperienceResumeData/data')
                    .then(function (response) {
                        $scope.workExperiencesData = response.data;
                    });
            }]
        }).state('resume.languageSkills', {
            templateUrl: 'dist/content/resume/template/languageSkillsContent.html',
            controller: ["$http", "$scope", "i18nPageContentResolver", function ($http, $scope, i18nPageContentResolver) {
                i18nPageContentResolver.jsonMessagesResolver('dist/content/resume/data/languageSkillsResumeData/messages')
                    .then(function (response) {
                        $scope.languageSkillsMessages = response.data;
                    });

                i18nPageContentResolver.jsonMessagesResolver('dist/content/resume/data/languageSkillsResumeData/data')
                    .then(function (response) {
                        $scope.languageSkills = response.data;
                    });
            }]
        })
    }])
    .controller("resumeController", ["$scope", "$state", "i18nPageContentResolver", function ($scope, $state, i18nPageContentResolver) {
        $scope.paginationInfo = {
            leftColumnOffset: "",
            leftColumnSize: "col-lg-3 col-md-3 col-sm-12 col-xs-12",
            rightColumnSize: "col-lg-9 col-md-9 col-sm-12 col-xs-12"
        };
        $state.go("resume.personalDetails");
        i18nPageContentResolver.jsonMessagesResolver("dist/content/resume/data/resumeTabLabel").then(function (response) {
            $scope.resumeTabLabel = response.data;
        })
    }]);
