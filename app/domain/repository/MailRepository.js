export default class MailRepository {

    sendMail(mailData){
        return fetch("https://valeriovaudiio-backend.cfapps.io/mail",
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mailData)
            })
    }
}