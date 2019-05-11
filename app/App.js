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
import {HashRouter, Route, Link, Switch} from "react-router-dom";
import ContactMePage from "./page/ContactMePage";
import MusicPage from "./page/MusicPage";
import ResumePage from "./page/ResumePage";
import BlogPage from "./page/BlogPage";

export default () => {
    return <HashRouter basepath="/valerio-vaudi">
        <div className="container-fluid">
            <Menu title="Valerio Vaudi" idMenu="menu">
                <MenuItem key="1"><Link className="nav-link" to="/">Home</Link></MenuItem>
                <MenuItem key="2"><Link className="nav-link" to="/music">Music</Link></MenuItem>
                <MenuItem key="3"><Link className="nav-link" to="/resume">My Resume</Link></MenuItem>
                <MenuItem key="4"><Link className="nav-link" to="/tech-blog">My Tech Blog</Link></MenuItem>
                <MenuItem key="5"><Link className="nav-link" to="/contact-me">Contact Me</Link></MenuItem>
            </Menu>

            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/music" component={MusicPage}/>
                <Route path="/resume" component={ResumePage}/>
                <Route exact path="/tech-blog" component={BlogPage}/>
                <Route exact path="/contact-me" component={ContactMePage}/>
            </Switch>
        </div>
    </HashRouter>
}