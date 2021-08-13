class Funko {

    static all = [];
   
    constructor({name, image, series, id, collection_id}){
        this.id = id
        this.name = name
        this.image = image
        this.series = series
        this.collection_id = collection_id
        Funko.all.push(this)
    }

   
    static eventFunkos(){
        createForm.addEventListener("submit", (e)=>{

            e.preventDefault()
            const form = e.target
            const name = form.querySelector('#name-input')
            const image = form.querySelector('#image-input')
            const series = form.querySelector('#series')
            const select = form.querySelector('#selectbox')
            
            Funko.createFunko(name, image, series, select)
        })
    }


    funkoHTML(){
        // this.element.innerHTML 
        return(`
        <div id='funko-${this.id}'>
            <h3><em>${this.name}</em></h3>
            <img src="${this.image}" alt="Funko Image"/>
            <p><strong>${this.series}</strong></p>
            <button class="delete" data-id="${this.id}" data-action='delete' id='${this.shop_id}'>Delete</button>
        </div>`)

        
    }
    

    addToDom(){
        funkosContainer.innerHTML += this.funkoHTML();
    }

    // Creating new funkos
    static renderForm(){
        createForm.innerHTML += 
        `<select name"collection" id="selectbox">
            <option data-id="1">Marvel</option>
            <option data-id="2">Harry Potter</option>
            <option data-id="3">Avatar</option>
        </select>

            Name:<input type="text" id="name-input" placeholder="Name">
            Image: <input type="text" id="image-input" placeholder="URL">
            Series: <input type="text" id="series" placeholder="Series">
            <input type="submit" id="create">`
            formContainer.append(createForm)
    }

    static createFunko(name, image, series, select){
        const collectionId = select.options[select.selectedIndex].attributes[0].value
        console.log(collectionId)

        const funko = {
            name: name.value,
            image: image.value,
            series: series.value,
            collection_id: collectionId
        }
        const configFunko = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify(funko)
        }
        fetch(`http://localhost:3000/api/collections/${collectionId}/funkos`, configFunko) 
        .then(resp => resp.json())
        .then(funko => {
            const f = new Funko(funko)
            // console.log(f)
            f.addToDom()
        })

    }

    static listenDelete() {
        funkosContainer.addEventListener("click", (e) =>{
            e.preventDefault()
            Funko.handleDelete(e);
        })
    }


    static handleDelete(event){
    const parent = event.target.parentNode

    const funkoid = event.target.dataset.id

    const collectionId = event.target.id

    if (event.target.dataset.action === 'delete' ){
        fetch(`http://localhost:3000/api/collections/${collectionId}/funkos/${funkoid}`, {
            method: "DELETE"
        })
        .then(resp =>  resp.json())
        .then(data => {
            if(data.message ==="Successfully deleted"){
                parent.remove();
            }else{
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
    }
}
  
}