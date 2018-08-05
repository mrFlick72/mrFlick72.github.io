import React from 'react';
import "../app/asset/css/main.css"
import "../app/asset/css/twitter.css"
import "bootstrap/dist/css/bootstrap.min.css"

import "jquery/dist/jquery"
import "popper.js/dist/popper"
import "popper.js/dist/popper-utils"
import "bootstrap/dist/js/bootstrap"
import avatar from '../app/asset/images/myPhoto.jpeg';


import WebContent from "./component/WebContent";

export default () => {
    return <div className="container-fluid">
        <div className="row">
            <div className="col-12">
                <h1>It Works again!!!</h1>
            </div>
            <div className="col-6">
                <WebContent text="Testop di prova"/>
            </div>
            <div className="col-6">
                <WebContent avatar={avatar} text="Testop di prova"/>
            </div>
            <div className="col-6">
                <WebContent title="Titolo" avatar={avatar} text="Testop di prova"/>
            </div>
        </div>
    </div>
}