// Make the colelction calls and services 

class CallCollection{
    constructor({name}){
        this.name = name
        CallCollection.call.push(this)
    }
    // My Index Route 
    static getCollection(){
        fetch(`${this.name}/collections`)
        .then(resp => resp.json)
        .then(funkos => {
            funkos.forEach(funko => {
            const funkoName = new Funko(funko)
            funkoName.renderToDom
        })})
    }
}