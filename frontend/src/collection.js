// Make the colelction calls and services 

class Collection{
    static all = [];
    constructor({name, id}){
        this.name = name
        this.id = id
        Collection.all.push(this)
    }
    
    // My Index Route 
    static getCollection(){
        fetch("http://localhost:3000/api/collections")
        .then(resp => resp.json()) 
        .then(data =>  Collection.renderCollection(data))
    }
    // create a store
    // Populate input with name of store 
     
    static renderCollection(data){
        const titleName = document.querySelector("#intro")
        data.forEach(collectionName => {
            const h1 = document.createElement("h1")
            h1.innerHTML = `${collectionName.name}`
            h1.dataset.id = `${collectionName.id}`
            h1.dataset.action = "display"
            titleName.append(h1)
            
            console.log(h1))
        });
    }
    }