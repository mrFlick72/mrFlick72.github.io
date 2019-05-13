import React from 'react';

import "../asset/css/components.css"
import "bootstrap/dist/js/bootstrap";
import MarckDownDocumentReader from "../component/reader/MarckDownDocumentReader";
import WebContentRepository from "../domain/repository/WebContentRepository";
import RowSeparator from "../component/layout/RowSeparator";

export default class TechPage extends React.Component {

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
        };

        this.webContentRepository = new WebContentRepository()
    }

    getBlogContent(repoName, description) {
        this.webContentRepository.getBlogContent(repoName)
            .then(markdownText => this.setState({blogContent: markdownText, blogContentTitle: description}))
    }


    render() {
        return <React.Fragment>
            <div className="row">
                {this.state.blogDocs.map(blogDocName =>
                    <div className="col">
                        <div className="card" onClick={this.getBlogContent.bind(this, blogDocName.name, blogDocName.description)}>
                            <div className="card-body">
                                <h5 className="card-title">{blogDocName.name}</h5>
                                <p className="card-text">{blogDocName.description}</p>
                                <button type="button" className="btn btn-primary"
                                        onClick={this.getBlogContent.bind(this, blogDocName.name, blogDocName.description)}>{blogDocName.description}
                                </button>
                            </div>
                        </div>
                    </div>)}
            </div>

            <RowSeparator/>

            {this.state.blogContent &&
            <MarckDownDocumentReader title={this.state.blogContentTitle} documentText={this.state.blogContent}/>}
        </React.Fragment>
    }
}