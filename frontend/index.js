// Global Listeners 
document.addEventListener('DOMContentLoaded', () => {
    Collection.getCollection()
    Funko.getFunkos()
    Funko.renderForm()

 })

function handlesubmit(){
    event.preventDefault()
    Funko.createFunko()
    event.target.reset()
}

// Global Variables

// Any Initializations of the application 

 