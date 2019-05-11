import React from 'react';
import "../../asset/css/components.css"
import WebContentReader from "./WebContentReader";

export default ({documentText, avatar, title}) => {
    return <WebContentReader avatar={avatar} htmlText={documentText} title={title}/>
}