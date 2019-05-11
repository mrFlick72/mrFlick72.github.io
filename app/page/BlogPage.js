import React from 'react';

import "../asset/css/components.css"
import "bootstrap/dist/js/bootstrap";
import MarckDownDocumentReader from "../component/reader/MarckDownDocumentReader";
import WebContentRepository from "../domain/repository/WebContentRepository";
import RowSeparator from "../component/layout/RowSeparator";

export default class BlogPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            blogDocs: [
                "spring-cloud-kubernetes-demo",
                "reservation-service",
                "bootiful-kotlin-todo-list",
                "sleuth-spike"],
        }

        this.webContentRepository = new WebContentRepository()
    }

    getBlogContent(repoName) {
        this.webContentRepository.getBlogContent(repoName)
            .then(markdownText => this.setState({blogContent: markdownText}))
    }


    render() {
        return <React.Fragment>

            <ul className="list-group">
                {this.state.blogDocs.map(blogDocName =>
                    <li className="list-group-item"
                        onClick={this.getBlogContent.bind(this, blogDocName)}>{blogDocName}</li>)}
            </ul>

            <RowSeparator/>

            {this.state.blogContent &&
            <MarckDownDocumentReader title="Test" documentText={this.state.blogContent}/>}
        </React.Fragment>
    }
}