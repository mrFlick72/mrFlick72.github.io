import React from "react"

export default (props) => {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target={`#${props.idMenu}`}
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id={props.idMenu}>
            <ul className="navbar-nav mr-auto">
                {props.children}
            </ul>
        </div>
    </nav>
}