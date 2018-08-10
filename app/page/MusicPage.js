import React from 'react';

import avatar from '../../app/asset/images/myPhoto.jpeg';
import WebContentReader from "../component/reader/WebContentReader";
import WebContentRepository from "../domain/repository/WebContentRepository";


export default class extends React.Component {

    constructor(props) {
        super(props);

        this.state = {sectionContent: "<div></div>"}

        this.musicContentSrcList = [
            "https://www.youtube.com/embed/H_m0SkMg9nU",
            "https://www.youtube.com/embed/zgKY_FdDatk",
            "https://www.youtube.com/embed/EKGZUsIU1rc"];

        this.webContentRepository = new WebContentRepository("html");
    }


    componentDidMount() {
        this.webContentRepository.getContent("music", "content")
            .then(text => this.setState({sectionContent: text}));
    }

    render() {
        return <section>

            <div className="row">
                <div className="col-12">
                    <article>
                        <WebContentReader title="Music" avatar={avatar} htmlText={this.state.sectionContent}/>
                    </article>
                </div>
            </div>


            <div className="row">
                <div className="col-12">
                    <hr/>
                </div>
            </div>

            <div className="row">
                {this.musicContentSrcList.map(musicContentSrc => {
                    return <div className="embeddedContainer col-lg-4">
                        <div className="embed-responsive embed-responsive-4by3">
                            <iframe className="embed-responsive-item" src={musicContentSrc}
                                    allowFullScreen></iframe>
                        </div>
                    </div>
                })}
            </div>
        </section>
    }
}