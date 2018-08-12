import React from 'react';

export default ({languageDetails}) => {

    return <div className="table-responsive">
        <table className="table">
            <thead>
            <tr>
                <th>Language</th>
                <th colSpan="2">Understanding</th>
                <th colSpan="2">Speaking</th>
                <th>Writing</th>
            </tr>
            <tr>
                <th></th>
                <th>Listening</th>
                <th>Reading</th>
                <th>Spoken Interaction</th>
                <th>Spoken Production</th>
                <th>Writing</th>
            </tr>
            </thead>
            <tbody>
            {languageDetails.map(language => {
                return <tr>
                    <td>{language.languageName}</td>
                    <td>{language.understanding.listening}</td>
                    <td>{language.understanding.reading}</td>
                    <td>{language.speaking.spokenInteraction}</td>
                    <td>{language.speaking.spokenProduction}</td>
                    <td>{language.writing.writing}</td>
                </tr>
            })}
            </tbody>
        </table>
    </div>
}