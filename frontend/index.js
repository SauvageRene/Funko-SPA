// Global Listeners 
document.addEventListener('DOMContentLoaded', () => {
    Collection.getCollection()
    Funko.getFunkos()
    Funko.renderForm()

 })
Funko.funkoForm.addEventListener('submit', handleSubmit)

function handleSubmit(){
    event.preventDefault()
    Funko.createFunko()
    event.target.reset()
}

// Global Variables

// Any Initializations of the application 

 