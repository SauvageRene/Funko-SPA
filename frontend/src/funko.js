class Funko {
    // remember all objects
    static all = [];
    static funkoContainer = document.getElementById('funkos-container');
    static funkoForm = document.querySelector('#form-container')

    constructor({name, image, series, wishlist, id}){
        this.name = name
        this.image = image
        this.series = series
        this.wishlist = wishlist
        this.id = id
        
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
        <div>

            <h3><em>${this.name}</em></h3>
            <img src="${this.image}" alt="Funko Image"/>
            <p><strong>${this.series}</strong></p>
            <button data-id="${this.id}" data-action='delete' id='destroy'>Delete</button>
        </div>`)
        // return this.element
    }
    // append our element to the funko-container

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
            }else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
    }
}
};
