// Global Listeners 



document.addEventListener('DOMContentLoaded', () => {
    Collection.getCollection()
    Funko.getFunkos();
    Funko.renderForm();
 })
Funko.funkoForm.addEventListener('submit', handleSubmit)
Funko.funkoContainer.addEventListener('click', listenDelete)

function handleSubmit(event){
    event.preventDefault();
    Funko.createFunko();
    event.target.reset();
}

function listenDelete(e){
    e.preventDefault();
    Funko.handleDelete(e);
}

// function handleDelete(e){
//     if (e.target.innerText === 'Delete'){

//     }
// }

// Global Variables

// Any Initializations of the application 

 