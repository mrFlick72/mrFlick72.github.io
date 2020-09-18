import React from 'react';

import avatar from '../../app/asset/images/myPhoto.jpeg';
import WebContentReader from "../component/reader/WebContentReader";
import WebContentRepository from "../domain/repository/WebContentRepository";
import {withRouter} from "react-router-dom";

class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.webContentRepository = new WebContentRepository("html");
        this.state = {
            tweets: [],
            bioContent: "<p></p>",
            workContent: "<p></p>",
            musicContent: "<p></p>"
        }
    }

    componentDidMount() {
        this.webContentRepository.getContent("home", "bio")
            .then(text => this.setState({bioContent: text}));

        this.webContentRepository.getContent("home", "music",)
            .then(text => this.setState({musicContent: text}));

        this.webContentRepository.getContent("home", "work")
            .then(text => this.setState({workContent: text}));
    }

    render() {
        return <div>
            <div className="row bd-highlight mb-3">
                <div id="bio" className="col-12">
                    <WebContentReader avatar={avatar} title="Bio" htmlText={this.state.bioContent}/>
                </div>
            </div>

            <div className="row bd-highlight mb-3">
                <div id="music" className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <WebContentReader title="Music" htmlText={this.state.musicContent}/>
                </div>
                <div id="work" className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <WebContentReader title="Work" htmlText={this.state.workContent}/>
                </div>
            </div>
        </div>
    }
}

export default withRouter(HomePage);