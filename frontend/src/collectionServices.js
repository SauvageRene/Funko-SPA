// Make the colelction calls and services 

class CollectionServices{
    static all = [];
    constructor({name}){
        this.name = name
        CollectionServices.all.push(this)
    }
    // My Index Route 
    static getCollection(){
        fetch("http://localhost:3000/api/collections")
        .then(resp => resp.json)
        .then(collection =>  console.log(collection))}
    
        //     funkos.forEach(name => {
        //     const collection = new CallCollection(name)
        //     collection.renderToDom()
        // })}
        // 
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