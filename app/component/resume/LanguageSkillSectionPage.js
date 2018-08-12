import React from 'react';

import ResumeRow from "./ResumeRow";
import LanguageSkillsTable from "./LanguageSkillsTable";

export default ({languageDetails}) => {

    return <div>
        <ResumeRow label="Main Language" content={languageDetails.mainLanguage}/>

        <ResumeRow label="Other Languages" content={<LanguageSkillsTable languageDetails={languageDetails.otherLanguages}/> }/>
    </div>
}