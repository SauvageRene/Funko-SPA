
const funkosContainer = document.getElementById('funkos-container')

const formContainer = document.getElementById('form-container')

const createForm = document.createElement('form')

const titleName = document.getElementById('intro')


// Global Listeners 



document.addEventListener('DOMContentLoaded', () => {
    Collection.getCollection()
    Funko.renderForm();
    Collection.listenDisplay();

    Funko.eventFunkos()
    Funko.listenDelete();
 })

// formContainer.addEventListener('submit', handleSubmit)
// funkosContainer.addEventListener('click', listenDelete)



// function handleSubmit(event){
//     event.preventDefault();
//     Funko.createFunko(event);
//     event.target.reset();
// }

// function listenDelete(e){
//     e.preventDefault();
//     Funko.handleDelete(e);
// }



// Global Variables

// Any Initializations of the application 

 