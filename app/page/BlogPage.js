import React from 'react';

import "../asset/css/components.css"
import "bootstrap/dist/js/bootstrap";
import MarckDownDocumentReader from "../component/reader/MarckDownDocumentReader";

export default class BlogPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            blogDoc: "<div></div>"
        }
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/mrFlick72/spring-cloud-kubernetes-demo/master/README.md")
            .then(response => response.text())
            .then(text => {
                console.log(text)
                this.setState({blogDoc: text})
            })
    }

    render() {
        return <MarckDownDocumentReader title="Test" documentText={this.state.blogDoc}>

        </MarckDownDocumentReader>
    }
}