import React from 'react';

import ResumeRow from "./ResumeRow";
import RowSeparator from "../layout/RowSeparator";


export default ({skillDetails}) => {
    return <div>{
        skillDetails.map(skillFamily => {
            return <div>
                <ResumeRow label="" content={<b>{skillFamily["familyName"]}</b>}/>
                <ResumeRow label="" content={skillFamily["value"].map(skill => <p>{skill}</p>)}/>
                <RowSeparator/>
            </div>
        })
    }
    </div>
}