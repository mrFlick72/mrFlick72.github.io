import React from 'react';

import ResumeRow from "./ResumeRow";
import RowSeparator from "../layout/RowSeparator";


const EUCATION_LABEL = {
    "company": "Company",
    "title": "Title",
    "type": "Type",
    "date": "Date"
};

export default ({education}) => {

    return <div>{
        education.map(educationItem => {
            return <div>{Object.keys(educationItem).map(function (key, index) {
                return <ResumeRow label={EUCATION_LABEL[key]} content={educationItem[key]}/>
            })}
                <RowSeparator/>
            </div>
        })
    }
    </div>
}