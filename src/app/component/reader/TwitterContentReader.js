import React from 'react';
import "../../asset/css/components.css"

export default ({tweets, userDetails}) => {
    console.log(tweets)
    return (
        <div className="panel panel-default">
            <div className="panel-heading">
                <h3 className="panel-title"> {userDetails.name}</h3>
            </div>
            <div className="panel-body">
                <div className="wall separation-content-corner">
                    <div className="row">
                        {tweets.map(tweet => {
                            return <div className="col-4"><div dangerouslySetInnerHTML={{__html: tweet}} className="block-center"/></div>
                        })}
                    </div>
                </div>
            </div>
        </div>)
}