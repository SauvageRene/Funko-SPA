// Make the colelction calls and services 

class Collection{
    static all = [];

    constructor({name, id, funkos}){
        this.name = name
        this.id = id
        this.funkos = funkos.map(f => new Funko(f)) 
        Collection.all.push(this)
    }
    
    // My Index Route 
    static getCollection(){
        fetch("http://localhost:3000/api/collections")
        .then(resp => resp.json())
        .then(data => 
            {data.forEach(name => {
                const CollectionName = new Collection(name)
                CollectionName.addToDom()
            })})
    }
  
    addToDom(){
        titleName.innerHTML += this.render()
    }

    render(){
        return `
        <div class="collection-name">
            <h2>${this.name}</h2>
            <button class="destroy" data-id =${this.id} data-action="display" id="display"> Show Collection</button>
            </div>
            `   
    }
    static listenDisplay(){
        titleName.addEventListener("click", (e)=>{
            e.preventDefault()
            Collection.handleDisplay(e)
        })
    }

    static handleDisplay(e){
        
        const collectionAction = e.target.dataset.action
            
            const collectionId = e.target.dataset.id
                
            if(collectionAction === "display"){
                
                const c = Collection.all.find(c => c.id == collectionId)
                    if (funkosContainer){
                        funkosContainer.innerHTML = ""
                        }
    
                c.renderFunkos()
    
            }
        }

    renderFunkos(){
        this.funkos.forEach(c => c.addToDom())
    }
    
}