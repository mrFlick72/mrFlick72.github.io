import React from 'react';
import ResumeSectionContainer from "../component/resume/ResumeSectionContainer";
import PersonalDetailsSectionPage from "../component/resume/PersonalDetailsSectionPage";
import RowSeparator from "../component/layout/RowSeparator";
import EducationSectionPage from "../component/resume/EducationSectionPage";

const PERSONAL_DETAILS_DATA = {
    "firstName": "Valerio",
    "lastName": "Vaudi",
    "address": "Ennio Ferrari street",
    "zip": "22100",
    "city": "Como",
    "region": "Como",
    "mail": "valerio.vaudi@gmail.com",
    "telephone": "069873633",
    "mobile": "3392381976",
    "birthDate": "14/12/1985",
    "state": "Italy",
    "sex": "Male",
    "taxCode": "VDAVLR85T14A323Q"
}

const EDUCATION_DATA = [
    {
        "title": "Università degli studi di Roma La Sapienza",
        "type": "Master degree",
        "date": "27/07/2017"
    },
    {
        "title": "Università degli studi di Roma La Sapienza",
        "type": "Barchelor’s degree",
        "date": "25/01/2010"
    },
    {
        "title": "Liceo scientifico 'Innocenzo XII' Anzio",
        "type": "High school",
        "date": "2003/2004"
    },
    {
        "title": "Spring Core",
        "type": "Course",
        "date": "27/11/2012 – 30/11/2012"
    },
    {
        "title": "Enterprise Integration With Spring",
        "type": "Course",
        "date": "19/05/2014 – 22/05/2014"
    },
    {
        "title": "Spring Web",
        "type": "Course",
        "date": "14/10/2016 – 18/10/2016"
    },
    {
        "company": "Pivotal",
        "title": "SpringSource Certified Spring Web Application Developer",
        "type": "Certification",
        "date": "30/12/2016"
    },
    {
        "company": "Liferay, Prometric",
        "title": "Certified Professional Developer Liferay Portal 6.2",
        "type": "Certification",
        "date": "22/12/2016"
    },
    {
        "company": "VMware, License PearsonVUE",
        "title": "SpringSource Certified Enterprise Integration Specialist",
        "type": "Certification",
        "date": "24/07/2014"
    },
    {
        "company": "VMware, License PearsonVUE",
        "title": "SpringSource Certified Spring Professional",
        "type": "Certification",
        "date": "08/11/2013"
    }
]


export default class extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            <ResumeSectionContainer title="Personal Details">
                <PersonalDetailsSectionPage personalDetails={PERSONAL_DETAILS_DATA}/>
            </ResumeSectionContainer>

            <RowSeparator/>

            <ResumeSectionContainer title="Education">
                <EducationSectionPage education={EDUCATION_DATA}/>
            </ResumeSectionContainer>

            <RowSeparator/>
        </div>
    }
}