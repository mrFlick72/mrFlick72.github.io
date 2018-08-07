import React from 'react';
import contactMeAvatar from "../asset/images/mail-min.jpg"
import "../asset/css/components.css"
import MailRepository from "../domain/repository/MailRepository";
import $ from "jquery/dist/jquery";
import "bootstrap/dist/js/bootstrap";

export default class ContactMePage extends React.Component {

    constructor(props) {
        super(props);

        this.mailDataRef = {
            mailSender: React.createRef(),
            mailSubject: React.createRef(),
            mailContent: React.createRef()
        };

        this.state = {
            alertClass: "alert alert-danger",
            modalTitle: "",
            modalMessage: ""
        }

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
            .then(response => {
                if (response.status === 201) {
                    this.setState({
                        alertClass: "alert alert-success",
                        modalTitle: "Mail has been sent ",
                        modalMessage: "Your email has been sent correctly"
                    });
                } else {
                    this.setState({
                        alertClass: "alert alert-danger",
                        modalTitle: "Mail has been sent ",
                        modalMessage: "Your email has been not sent correctly"
                    });
                    $("#contactModalMessage").modal("show");
                }

                $("#contactModalMessage").modal("show");
            })
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-12">
                        <img src={contactMeAvatar} className="left-decorator"/>
                        <h3>If you have any question do not hesitate, contact me on
                            <a href="mailto:valerio.vaudi@gmail.com"> valerio.vaudi@gmail.com</a> or using the form
                            below
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

                <div id="contactModalMessage" className="modal" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{this.state.modalTitle}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className={this.state.alertClass} role="alert">
                                    <p>{this.state.modalMessage}</p>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}