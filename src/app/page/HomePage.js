import React from 'react';

import avatar from '../../app/asset/images/myPhoto.jpeg';
import WebContentReader from "../component/reader/WebContentReader";

export default class HomePage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            bioContent: "<p></p>",
            workContent: "<p></p>",
            musicContent: "<p></p>"
        }

    }

    componentDidMount() {
        fetch("/valerio-vaudi/src/app/content/home/bio.html")
            .then(result => result.text())
            .then(text => this.setState({bioContent: text}));

        fetch("/valerio-vaudi/src/app/content/home/music.html")
            .then(result => result.text())
            .then(text => this.setState({musicContent: text}));

        fetch("/valerio-vaudi/src/app/content/home/work.html")
            .then(result => result.text())
            .then(text => this.setState({workContent: text}));
    }

    render() {
        return <div>
            <div className="row bd-highlight mb-3">
                <div className="col-12">
                    <WebContentReader avatar={avatar} title="Bio" htmlText={this.state.bioContent}/>
                </div>
            </div>

            <div className="row bd-highlight mb-3">
                <div className="col-6">
                    <WebContentReader htmlText={this.state.musicContent}/>
                </div>
                <div className="col-6">
                    <WebContentReader title="Work" htmlText={this.state.workContent}/>
                </div>
            </div>
        </div>

    }
}