// Global Listeners 



document.addEventListener('DOMContentLoaded', () => {
    Collection.getCollection()
    Funko.getFunkos();
    Funko.renderForm();
    Review.getComments();
 })

Funko.funkoForm.addEventListener('submit', handleSubmit)
Funko.funkoContainer.addEventListener('click', listenDelete)

Review.commentContainer.addEventListener('submit', listenSubmit)


function handleSubmit(event){
    event.preventDefault();
    Funko.createFunko(event);
    event.target.reset();
}

function listenDelete(e){
    e.preventDefault();
    Funko.handleDelete(e);
}
function listenSubmit(e){
    e.preventDefault
    Review.createComment(e);
    e.target.reset();
}



// function handleDelete(e){
//     if (e.target.innerText === 'Delete'){

//     }
// }

// Global Variables

// Any Initializations of the application 

 