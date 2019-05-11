const BASE_URL = "/app/content";
const GET_GIT_HUB_README = (gitRepoName) => `https://raw.githubusercontent.com/mrFlick72/${gitRepoName}/master/README.md`;
const GET_GIT_HUB_MARCK_DOWN_API = "https://api.github.com/markdown/raw"

export default class WebContentRepository {

    constructor(defaultMediaType) {
        this.defaultMediaType = defaultMediaType
    }

    getContent(context, content, mediaType) {
        return fetch(`${BASE_URL}/${context}/${content}.${mediaType || this.defaultMediaType}`)
            .then(result => result.text())
    }

    getBlogContent(conent) {
        return fetch(GET_GIT_HUB_README(conent))
            .then(result => result.text())
            .then(text => fetch(GET_GIT_HUB_MARCK_DOWN_API, {method: "POST", body: text}))
            .then(result => result.text())

    }
}