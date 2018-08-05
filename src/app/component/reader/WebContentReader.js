import React from 'react';
import "../../asset/css/components.css"

export default ({title, avatar, text, htmlText}) => {
    return (
        <div className="card">
            {title && <div className="card-header">{title}</div>}

            <div className="card-body">
                <p className="card-text">
                    {avatar && <img className="left-decorator" src={avatar}/>}
                    {htmlText ? <div dangerouslySetInnerHTML={{__html:htmlText}} /> : {text}}
                </p>
            </div>
        </div>)
}