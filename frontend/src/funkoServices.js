// Make the colelction calls and services 

class CallFunko{
    constructor({name}){
        this.name = name
        CallFunko.call.push(this)
    }
    // My Index Route 
    static getFunkos(){
        fetch(`${this.name}/collections`)
        .then(resp => resp.json)
        .then(funkos => {
            funkos.forEach(funko => {
            const funkoName = new Funko(funko)
            funkoName.renderToDom
        })})
    }
}