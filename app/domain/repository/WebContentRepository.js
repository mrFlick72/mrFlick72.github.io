const BASE_URL = "/app/content";

export default class WebContentRepository {

    constructor(defaultMediaType){
        this.defaultMediaType = defaultMediaType
    }

    getContent(context, content, mediaType)
    {
        return fetch(`${BASE_URL}/${context}/${content}.${mediaType || this.defaultMediaType}`)
            .then(result => result.text())
    }

}