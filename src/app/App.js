import React from 'react';
import "../app/asset/css/main.css"
import "../app/asset/css/twitter.css"
import "bootstrap/dist/css/bootstrap.min.css"

import "jquery/dist/jquery"
import "popper.js/dist/popper"
import "popper.js/dist/popper-utils"
import "bootstrap/dist/js/bootstrap"


import Menu from "./component/menu/Menu";
import MenuItem from "./component/menu/MenuItem";
import HomePage from "./page/HomePage";

export default () => {
    return <div className="container-fluid">
        <Menu title="Home" idMenu="menu">
            <MenuItem key="1"><a className="nav-link" href="#">Link</a></MenuItem>
            <MenuItem key="2"><a className="nav-link" href="#">Link</a></MenuItem>
            <MenuItem key="3"><a className="nav-link" href="#">Link</a></MenuItem>
            <MenuItem key="4"><a className="nav-link" href="#">Link</a></MenuItem>
        </Menu>
        <HomePage />
    </div>
}