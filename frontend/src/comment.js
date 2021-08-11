class Comment {
    static all = []
    constructor({id, rate, review, funko_id}) {
        this.id = id
        this.rate = rate
        this.review = review
        this.funko_id = funko_id

        Comment.all.push(this)
    }
    renderform(){
        return(`<li id=${this.game_id} data-id="comment-${this.id}"><br>
        <h5>${this.rate}</h5>
        <p>${this.review}</p>
        <button data-action='delete'>Delete Comment</button>
        </li>`)
    }

    static createComment(){
        const comment = {
            rate: document.getElementById('rate').value,
            review: document.getElementById('review').value
        }
        const id = document.getElementById("form").dataset.id
        fetch(`http:localhost:3000/collections/1/funkos/${id}/comments`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(comment)
            })
            .then(resp => resp.json)
            .then(comment =>{
                console.log(comment)
            })
            .catch(err => console.error("error commenting", err))
}}
