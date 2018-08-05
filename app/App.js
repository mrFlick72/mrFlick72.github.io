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
import {BrowserRouter, HashRouter, Route, Link, Switch, Redirect} from "react-router-dom";

export default () => {
    return <HashRouter>
        <div className="container-fluid">
            <Menu title="Home" idMenu="menu">
                <MenuItem key="1"><Link className="nav-link" to="/">Bio</Link></MenuItem>
                <MenuItem key="2"><Link className="nav-link" to="/#music">Music</Link></MenuItem>
                <MenuItem key="3"><Link className="nav-link" to="/#work">Work</Link></MenuItem>
                <MenuItem key="4"><Link className="nav-link" to="/#tweets">More recent Tweets</Link></MenuItem>
            </Menu>

            <Route path="/" component={HomePage}/>
        </div>
    </HashRouter>
}