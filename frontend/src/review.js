
class Review {
    static all = []
    static commentContainer = document.querySelector('#new-comment-form')

    constructor({id, rate, review, funko_id}) {
        this.id = id
        this.rate = rate
        this.review = review
        this.funko_id = funko_id

        Review.all.push(this)
    }

    static getComments(){
        fetch("http://localhost:3000/api/collections/1/funkos")
        .then(resp => resp.json())
        .then(comments => {
            comments.forEach(comment => {
            const c = new Review(comment) 
            c.renderComment()
        })})
    }
    
    renderComment(){
        Review.commentContainer.innerHTML += this.renderform()
    }

    renderform(){
        return(`<li id=${this.funko_id} data-id="comment-${this.id}"><br>
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
        const id = document.getElementById(`funko-${this.id}`)
        fetch(`http:localhost:3000/collections/1/funkos/${id}/reviews`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(comment)
            })
            .then(resp => resp.json)
            .then(comments =>{
                comments.forEach(comment => {
                    const newComment = new Review(comment)
                    newComment.renderComment()
                })
                    
                })
            .catch(err => console.error("error commenting", err))
    }
    
}
