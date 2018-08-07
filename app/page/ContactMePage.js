import React from 'react';
import contactMeAvatar from "../asset/images/mail-min.jpg"
import "../asset/css/components.css"
import MailRepository from "../domain/repository/MailRepository";

export default class ContactMePage extends React.Component {

    constructor(props) {
        super(props);

        this.mailDataRef = {
            mailSender: React.createRef(),
            mailSubject: React.createRef(),
            mailContent: React.createRef()
        };

        this.mailRepository = new MailRepository();
        this.sendMail = this.sendMail.bind(this);
    }

    sendMail(e) {
        e.preventDefault();
        let mailData = {
            "from": this.mailDataRef.mailSender.current.value,
            "subject": this.mailDataRef.mailSubject.current.value,
            "message": this.mailDataRef.mailContent.current.value
        };
        this.mailRepository.sendMail(mailData)
    }

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
                        <hr/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="card-text">
                                    <form onSubmit={this.sendMail}>
                                        <div className="form-group">
                                            <label>Your mail address</label>
                                            <input ref={this.mailDataRef.mailSender}
                                                   className="form-control"
                                                   placeholder="Enter your mail address"/>
                                        </div>

                                        <div className="form-group">
                                            <label>Mail subject</label>
                                            <input ref={this.mailDataRef.mailSubject}
                                                   className="form-control"
                                                   placeholder="Mail subject"/>
                                        </div>
                                        <div className="form-group">
                                            <label>Mail content </label>
                                            <textarea ref={this.mailDataRef.mailContent}
                                                      rows="10" className="form-control"
                                                      placeholder="Mail content ...."/>
                                        </div>

                                        <button type="submit" className="btn btn-primary float-right">Send Mail</button>
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