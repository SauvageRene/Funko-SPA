// Make the colelction calls and services 

class Collection{
    static all = [];
    constructor({name}){
        this.name = name
        Collection.all.push(this)
    }

    // My Index Route 
    static getCollection(){
        fetch("http://localhost:3000/api/collections")
        .then(resp => resp.json())
        .then(data =>  Collection.renderCollection(data))
    }
    
     
    static renderCollection(data){
        const titleName = document.querySelector("#intro")
        data.forEach(collectionName => {
            const h1 = document.createElement("h1")
            console.log(h1)
            h1.innerHTML = collectionName.name
            titleName.append(h1)
        });
    }
    }