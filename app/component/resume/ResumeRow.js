import React from 'react';

const LEFT_COLUMN_SIZE = "col-lg-3 col-md-3 col-sm-12 col-xs-12"
const RIGHT_COLUMN_SIZE = "col-lg-9 col-md-9 col-sm-12 col-xs-12"

export default ({avatar, label, content}) => {

    return <div className="row resume-item-row">
            <span className={LEFT_COLUMN_SIZE}>
                    <b>{label} </b>
            </span>
        {
            avatar ? <span className={RIGHT_COLUMN_SIZE}><img src={avatar}/> </span>
                : <span className={RIGHT_COLUMN_SIZE}>{content}</span>
        }
    </div>
}