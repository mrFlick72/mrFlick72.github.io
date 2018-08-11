import React from 'react';
import ResumeSectionContainer from "../component/resume/ResumeSectionContainer";
import PersonalDetailsSectionPage from "../component/resume/PersonalDetailsSectionPage";
import RowSeparator from "../component/layout/RowSeparator";
import EducationSectionPage from "../component/resume/EducationSectionPage";
import ResumeRepository from "../domain/repository/ResumeRepository";
import SkillSectionPage from "../component/resume/SkillSectionPage";
import WorkExperienceSectionPage from "../component/resume/WorkExperienceSectionPage";

export default class extends React.Component {

    constructor(props) {
        super(props)

        this.resumeRepository = new ResumeRepository();
    }

    render() {
        return <div>
            <ResumeSectionContainer title="Personal Details">
                <PersonalDetailsSectionPage personalDetails={this.resumeRepository.getPersonalDetails()}/>
            </ResumeSectionContainer>

            <RowSeparator/>

            <ResumeSectionContainer title="Education">
                <EducationSectionPage educationDetails={this.resumeRepository.getEducationDetails()}/>
            </ResumeSectionContainer>

            <RowSeparator/>

            <ResumeSectionContainer title="Technical Skills">
                <SkillSectionPage skillDetails={this.resumeRepository.getSkillDetails()}/>
            </ResumeSectionContainer>

            <RowSeparator/>

            <ResumeSectionContainer title="Work Experience">
                <WorkExperienceSectionPage workExperience={this.resumeRepository.getWorkExperience()}/>
            </ResumeSectionContainer>

            <RowSeparator/>
        </div>
    }
}