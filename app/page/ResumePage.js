import React from 'react';
import ResumeSectionContainer from "../component/resume/ResumeSectionContainer";
import PersonalDetailsSectionPage from "../component/resume/PersonalDetailsSectionPage";
import EducationSectionPage from "../component/resume/EducationSectionPage";
import ResumeRepository from "../domain/repository/ResumeRepository";
import SkillSectionPage from "../component/resume/SkillSectionPage";
import WorkExperienceSectionPage from "../component/resume/WorkExperienceSectionPage";
import LanguageSkillSectionPage from "../component/resume/LanguageSkillSectionPage";
import {Route, Link, Switch, Redirect} from "react-router-dom";

export default class extends React.Component {

    constructor(props) {
        super(props)

        this.resumeRepository = new ResumeRepository();
    }

    render() {
        return <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link className="nav-link" to={"/resume/personal-details"}>Personal Details</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/resume/education-details"}>Education</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/resume/skills-details"}>Skills</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/resume/work-experience-details"}>Work Experience</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={"/resume/language-skills-details"}>Language Skills</Link>
                </li>
            </ul>

            <div className="tab-content">
                <div className="tab-pane fade show active">

                    <Switch>
                        <Route exact path="/resume/personal-details"
                               render={() => {
                                   return <ResumeSectionContainer title="Personal Details">
                                       <PersonalDetailsSectionPage
                                           personalDetails={this.resumeRepository.getPersonalDetails()}/>
                                   </ResumeSectionContainer>
                               }}/>

                        <Route exact path="/resume/education-details"
                               render={() => {
                                   return <ResumeSectionContainer title="Education">
                                       <EducationSectionPage
                                           educationDetails={this.resumeRepository.getEducationDetails()}/>
                                   </ResumeSectionContainer>
                               }}/>

                        <Route exact path="/resume/skills-details"
                               render={() => {
                                   return <ResumeSectionContainer title="Technical Skills">
                                       <SkillSectionPage skillDetails={this.resumeRepository.getSkillDetails()}/>
                                   </ResumeSectionContainer>
                               }}/>

                        <Route exact path="/resume/work-experience-details"
                               render={() => {
                                   return <ResumeSectionContainer title="Work Experience Details">
                                       <WorkExperienceSectionPage
                                           workExperience={this.resumeRepository.getWorkExperienceDetails()}/>
                                   </ResumeSectionContainer>
                               }}/>

                        <Route exact path="/resume/language-skills-details"
                               render={() => {
                                   return <ResumeSectionContainer title="Languages Skills Details">
                                       <LanguageSkillSectionPage
                                           languageDetails={this.resumeRepository.getLanguages()}/>
                                   </ResumeSectionContainer>
                               }}/>

                        <Redirect from='/resume' to='/resume/personal-details'/>
                    </Switch>
                </div>
            </div>
        </div>
    }
}