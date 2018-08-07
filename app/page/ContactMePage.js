import React from 'react';
import contactMeAvatar from "../asset/images/mail-min.jpg"
import "../asset/css/components.css"

export default class ContactMePage extends React.Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <img src={contactMeAvatar} className="left-decorator"/>
                        <h3>If you have any question do not hesitate, contact me on <a
                            href="mailto:valerio.vaudi@gmail.com"></a>valerio.vaudi@gmail.com or using the form below
                        </h3>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <hr />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-text">
                                    <form>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Your mail address</label>
                                            <input type="email" className="form-control"
                                                   placeholder="Enter your mail address"/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Mail subject</label>
                                            <input type="email" className="form-control"
                                                   placeholder="Mail subject"/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Mail content </label>
                                            <textarea rows="10" className="form-control" placeholder="Mail content ...."/>
                                        </div>

                                        <button type="button" className="btn btn-primary float-right">Send Mail</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}