// Make the funko calls and services 

class CallFunko{
    constructor(api){
        this.api = api
    }
    // My Index Route 
    getFunkos(){
        fetch(`${this.api}/contacts`)
        .then(resp => resp.json)
        .then(funkos => {
            for (const funko of funkos){
                
            }
        })
    }
   
}