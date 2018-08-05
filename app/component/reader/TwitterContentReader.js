import React from 'react';
import "../../asset/css/components.css"

export default ({tweets, avatar, title}) => {
    return (


        <div className="card">
            {title &&
            <div className="card-header">{avatar && <img className="left-decorator" src={avatar}/>} {title}</div>}

            <div className="card-body">
                <div className="card-text">
                    <div className="row">
                        {tweets.map(tweet => {

                            return <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                                <div dangerouslySetInnerHTML={{__html: tweet}} className="block-center"/>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>)
}