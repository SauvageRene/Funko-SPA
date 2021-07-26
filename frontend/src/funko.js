class Funko {
    // remember all objects
    static all = [];
    static funkoContainer = document.getElementById('funkos-container');
    static funkoForm = document.querySelector('#form-container')

    constructor({name, image, series}){
        this.name = name
        this.image = image
        this.series = series
        this.element = document.createElement('li')
        // this.element = dataset.id = this.id
        // this.element.id = `funko-${this.id}`

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
        this.element.innerHTML += `
        <div>
            <h4>${this.name}</h4>
            <img src="${this.image}"/>
            <strong><p>${this.series}</p></strong>
            < 
        </div>`
        return this.element
    }
    // append our element to the contact-container
    renderToDom(){
        Funko.funkoContainer.append(this.funkoHTML())
    }

    // Creating new funkos
    static renderForm(){
        Funko.funkoForm.innerHTML += 
        `<form id="new-funko-form">
            Name:<input type="text" id="name">
            Image: <input img src= id="image">
            Series: <input type="text" id="series">
            <input type="submit" id="create">
        </form>`
    }
};
