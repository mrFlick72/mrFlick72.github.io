import React from 'react';

import avatar from '../../app/asset/images/myPhoto.jpeg';
import WebContentReader from "../component/reader/WebContentReader";
import {from, zip as zipStatic} from 'rxjs';
import {map, flatMap} from 'rxjs/operators';
import TwitterContentReader from "../component/reader/TwitterContentReader";


export default class HomePage extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            tweets: [],
            bioContent: "<p></p>",
            workContent: "<p></p>",
            musicContent: "<p></p>"
        }
        }

    getTweet(contentId) {
        return fetch(["https://valeriovaudiio-backend.cfapps.io/twitter/tweet", contentId].join("/")).then(response => response.json())
    }

    addOnList(array, item) {
        array.push(item);
        return array;
    }

    getTweets() {
        let observable = from(fetch("https://valeriovaudiio-backend.cfapps.io/twitter/userTimeLine")
            .then(response => response.json()))
            .pipe(flatMap(userTimeline => userTimeline))
            .pipe(flatMap(userTimelineItem => {
                return this.getTweet(userTimelineItem.idStr)
            }));

        return zipStatic(observable)
            .pipe(flatMap(tweet => tweet));

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

        this.getTweets()
            .subscribe((tweetHtml) => {
                this.setState({tweets: this.addOnList(this.state.tweets, tweetHtml.html)});

            });

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
                    <WebContentReader title="Music" htmlText={this.state.musicContent}/>
                </div>
                <div className="col-6">
                    <WebContentReader title="Work" htmlText={this.state.workContent}/>
                </div>
            </div>

            <div className="row bd-highlight mb-3">
                <div className="col-12">
                    <TwitterContentReader tweets={this.state.tweets} userDetails="Valerio Vaudi"/>
                </div>
            </div>
        </div>

    }
}