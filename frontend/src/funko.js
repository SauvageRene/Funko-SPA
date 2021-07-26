class Funko {
    // remember all objects
    static all = [];
    static funkoContainer = document.getElementsByid('funkos-container');

    constructor(name, image, series){
        this.name = name
        this.image = image
        this.series = series
        this.element = document.createElement('li')
        this.element = dataset.id = this.id
        this.element.id = `funko-${this.id}`

        Funko.all.push(this)
    }
    // Create the inner HTML for the element

    funkoHTML(){
        this.element.innerHTML += `
        <div>
            <h4>${this.name}</h4>
            <p>${this.image}</p>
            <p>${this.series}</p>
        </div>`
        return this.element
    }
    // append our element to the contact-container
    renderToDom(){
        Funko.funkoContainer.appendchild(funkoHTML())
    }
};