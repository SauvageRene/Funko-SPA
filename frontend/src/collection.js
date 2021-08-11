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
            const bttn = document.createElement("button")
            bttn.innerHTML = `${collectionName.name}`
            bttn.dataset.id = `${collectionName.id}`
            bttn.dataset.action = "display"
            titleName.append(bttn)
            bttn.addEventListener('click', (e)=>
            console.log(bttn))
        });
    }
    }