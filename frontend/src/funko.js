class Funko {
    // remember all objects
    static all = [];
    static funkoContainer = document.getElementById('funkos-container');
    static funkoForm = document.querySelector('#form-container')

    constructor({name, image, series, wishlist, id, reviews}){
        this.name = name
        this.image = image
        this.series = series
        this.wishlist = wishlist
        this.id = id
        this.reviews = reviews.map(r => new Review(r))
        
        Funko.all.push(this)
    }
    // Create the inner HTML for the element
    static getFunkos(){
        fetch("http://localhost:3000/api/collections/1/funkos")
        .then(resp => resp.json())
        .then(funkos => {
            funkos.forEach(funko => {
            const funkoName = new Funko(funko) 
            funkoName.renderToDom()
        })})
    }

    funkoHTML(){
        // this.element.innerHTML 
        return(`
        <div id='funko-${this.id}'>
            <h3><em>${this.name}</em></h3>
            <img src="${this.image}" alt="Funko Image"/>
            <p><strong>${this.series}</strong></p>
            <button data-action='add'>Add Review</button>
            <button data-id="${this.id}" data-action='delete' id='destroy'>Delete</button>
            <div id="review-container></div>
        </div>`)
        // return this.element
    }
    // append our element to the funko-container
    //   // <form id="form">
            // <h5>Comments</h5>
            // <input id="rate" placeholder="rate condition" type="text"><br>
            // <input id="review" placeholder="comment" type="text">
            // <input data-action="submit" id="comment-submit" value="Submit" type="submit">
            // </form>

    renderToDom(){
        Funko.funkoContainer.innerHTML += this.funkoHTML();

    }

    // Creating new funkos
    static renderForm(){
        Funko.funkoForm.innerHTML += 
        `<form id="new-funko-form">
            Name:<input type="text" id="name" placeholder="Name">
            Image: <input type="text" id="image" placeholder="URL">
            Series: <input type="text" id="series" placeholder="Series">
            <input type="submit" id="create">
        </form>`
    }

    static createFunko(){
        const funko = {
            name: document.getElementById('name').value,
            image: document.getElementById('image').value,
            series: document.getElementById('series').value,
            wishlist: false,
            collection_id: 1 
        }
        const configFunko = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify(funko)
        }
        fetch('http://localhost:3000/api/collections/1/funkos', configFunko) 
        .then(resp => resp.json())
        .then(funko => {
            const f = new Funko(funko)
            // console.log(f)
            f.renderToDom()
        })

    }

    // static listenDelete() {
    //     Funko.funkoContainer.addEventListener("click", handleDelete())
    // }

    static handleDelete(event){
    const parent = event.target.parentNode
    const funkoid = event.target.dataset.id

    if (event.target.dataset.action === 'delete' ){
        fetch(`http://localhost:3000/api/collections/1/funkos/${funkoid}`, {
            method: "DELETE"
        })
        .then(resp =>  resp.json())
        .then(data => {
            if(data.message ==="Successfully deleted"){
                parent.remove();
            }else{
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
    }
}

    renderComments(){
        const li = document.getElementById(`funko-${this.id}`)
        const ul = document.createElement('ul')
        
        this.reviews.forEach(r => ul.innerHTML += r.renderToDom())
        li.append(ul)
        currentReviews = ul
    }
    static handleAction(e){
       
        const li = e.target.parentElement
        const action = e.target.dataset.action
        switch (action){
            case "display":
                if (currentReviews) currentReviews.remove()
                console.log("Displaying Reviews", li.dataset.id)
                const g = Funko.all.find(f => f.id == li.dataset.id)
                f.renderReviews();
                break;

            case "add":
                if (currentForm) currentForm.remove()
                console.log("click on add")
                const onef = Funko.all.find(f => f.id == li.dataset.id)
                onef.addReviewForm();
                
                break;

            case "delete":
                console.log("clicked delete")
                Review.deleteReview(li)
        }
    }

  
};