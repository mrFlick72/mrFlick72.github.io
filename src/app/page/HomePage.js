import React from 'react';

import avatar from '../../app/asset/images/myPhoto.jpeg';
import WebContentReader from "../component/reader/WebContentReader";
import {from, zip as zipStatic} from 'rxjs';
import {map, flatMap} from 'rxjs/operators';
import TwitterContentReader from "../component/reader/TwitterContentReader";
import WebContentRepository from "../domain/repository/WebContentRepository";


export default class HomePage extends React.Component {

    constructor(props) {
        super(props)

        this.webContentRepository = new WebContentRepository("html");
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
        return from(fetch("https://valeriovaudiio-backend.cfapps.io/twitter/userTimeLine")
            .then(response => response.json()))
            .pipe(flatMap(userTimeline => userTimeline))
            .pipe(flatMap(userTimelineItem => {
                return this.getTweet(userTimelineItem.idStr)
            }));

    }

    componentDidMount() {
        this.webContentRepository.getContent("home", "bio")
            .then(text => this.setState({bioContent: text}));

        this.webContentRepository.getContent("home", "music",)
            .then(text => this.setState({musicContent: text}));

        this.webContentRepository.getContent("home", "work")
            .then(text => this.setState({workContent: text}));

        this.getTweets()
            .subscribe((tweet) => {
                this.setState((prevState) => ({tweets: prevState.tweets.concat(tweet.html)}))
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