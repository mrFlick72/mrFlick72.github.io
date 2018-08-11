import React from 'react';
import "../../asset/css/components.css"

export default ({title, children}) => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">{title}</div>

                    <div className="card-body">
                        <div className="card-text">
                            <div className="jumbotron">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}