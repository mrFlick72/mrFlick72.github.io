import React from 'react';

import ResumeRow from "./ResumeRow";
import RowSeparator from "../layout/RowSeparator";


export default ({workExperience}) => {
    return <div>{
        workExperience.map(experience => {
            return <div>
                <ResumeRow label="Company" content={experience["company"]}/>
                <ResumeRow label="Activity period"
                           content={`${experience["startActivityDate"]} - ${experience["startActivityDate"]}`}/>
                <ResumeRow label="Commitments"
                           content={experience['commitments'].map(commitment => <p><b>{commitment}</b></p>)}/>
                <ResumeRow label="Job description"
                           content={<p className="text-justify">{experience['jobDescription']}</p>}/>
                <RowSeparator/>
            </div>
        })
    }
    </div>
}