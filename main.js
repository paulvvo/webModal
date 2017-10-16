
//Variables from index.html

// Get modal element
var modal = document.getElementById('simpleModal');
// get modal button element
var modalBtn = document.getElementById("modalBtn");
//get exit button
var closeBtn = document.getElementsByClassName('closeBtn')[0];



//listen for "opening" click
modalBtn.addEventListener('click',openModal);
//listen for the "exit" click
closeBtn.addEventListener('click', closeModal);
//listen for the click outside the modal window
window.addEventListener('click', outsideClick);


function openModal(){
    modal.style.display = "block";
}

function closeModal(){
modal.style.display = 'none';
}

function outsideClick(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}