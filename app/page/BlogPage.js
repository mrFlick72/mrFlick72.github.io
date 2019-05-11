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
                {
                    name: "spring-cloud-kubernetes-demo",
                    description: "Spring Cloud Kubernetes usage example"
                },
                {
                    name: "reservation-service",
                    description: "R2DBC usage Example"
                },
                {
                    name: "bootiful-kotlin-todo-list",
                    description: "Bootiful todo list written in Kotlin"
                },
                {
                    name: "sleuth-spike",
                    description: "A Sleuth usage example"
                }],
        }

        this.webContentRepository = new WebContentRepository()
    }

    getBlogContent(repoName, description) {
        this.webContentRepository.getBlogContent(repoName)
            .then(markdownText => this.setState({blogContent: markdownText, blogContentTitle: description}))
    }


    render() {
        return <React.Fragment>

            <ul className="list-group">
                {this.state.blogDocs.map(blogDocName =>
                    <li className="list-group-item"
                        onClick={this.getBlogContent.bind(this, blogDocName.name, blogDocName.description)}>{blogDocName.description}</li>)}
            </ul>

            <RowSeparator/>

            {this.state.blogContent &&
            <MarckDownDocumentReader title={this.state.blogContentTitle} documentText={this.state.blogContent}/>}
        </React.Fragment>
    }
}