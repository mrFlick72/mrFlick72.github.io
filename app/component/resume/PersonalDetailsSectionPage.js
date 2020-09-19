import React from 'react';

import avatar from '../../asset/images/myPhoto.jpeg';
import ResumeRow from "./ResumeRow";


const PERSONAL_DETAILS_LABEL = {
    "firstName": "First Name",
    "lastName": "Last Name",
    "address": "Address",
    "zip": "Zip",
    "city": "City",
    "region": "Region",
    "mail": "E-Mail",
    "skype": "Skype",
    "mobile": "Mobile",
    "birthDate": "Birth Date",
    "state": "State",
    "sex": "Sex",
    "taxCode": "Tax Code"
}

export default ({personalDetails}) => {
    return <div>
        <ResumeRow label="" avatar={avatar}/>{
        Object.keys(personalDetails).map(function (key, index) {
            return <ResumeRow label={PERSONAL_DETAILS_LABEL[key]}
                              content={personalDetails[key]}/>
        })}</div>
}