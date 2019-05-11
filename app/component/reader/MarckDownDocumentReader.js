import React from 'react';
import {markdown} from 'markdown';
import "../../asset/css/components.css"
import WebContentReader from "./WebContentReader";

export default ({documentText, avatar, title}) => {
    console.log(documentText)
    return <WebContentReader avatar={avatar} htmlText={markdown.toHTML(documentText)} title={title}/>
}