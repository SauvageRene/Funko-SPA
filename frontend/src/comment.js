class Comment {
    static all = []
    constructor({id, rate, review, funko_id}) {
        this.id = id
        this.rate = rate
        this.review = review
        this.funko_id = funko_id

        Comment.all.push(this)
    }
    render(){
        return(`<li id=${this.game_id} data-id=${this.id}><br>
        <h5>${this.rate}</h5>
        <p>${this.review}</p>
        <button data-action='delete'>Delete Review</button>
        </li>`)
    }
    
}