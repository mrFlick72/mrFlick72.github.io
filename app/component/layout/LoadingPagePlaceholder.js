import React from 'react';

export default () => {

    return <div>
        <div className="row">
            <div className="col-12">
                <div className="mh-100 float-left"
                     style={{"width": "60px", "height": "60px", "background-color": "#eee", marginRight: "10px", marginBottom:"3px"}}>
                </div>

                {[1, 1, 1, 1, 1, 1].map(item => {
                    return <div className="progress" style={{marginBottom: "10px"}}>
                        <div className="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0"
                             aria-valuemax="100"></div>
                    </div>

                })}

            </div>
        </div>
    </div>

}