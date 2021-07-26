// Make the funko calls and services 

class CallFunko{
    constructor({api}){
        this.api = api
    }
    // My Index Route 
    getFunkos(){
        fetch(`${this.api}/funkos`)
        .then(resp => resp.json)
        .then(funkos => {
            funkos.forEach(funko => {
            const funkoName = new Funko(funko)
            funkoName.renderToDom
        })})
    }
}