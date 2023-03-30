// Classes of element are stored in a nodeList if many elements have same class 
// We can iterate over that nodeList and then use Event Listeners to manipulate CSS .
// In JS we have a method called remove and add using which we can add and remove 
// from the class(Node) of some element 

const modal = document.querySelector('.modal') ;
const overLay = document.querySelector('.overlay') ;
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal =()=>{
    console.log('Button Clicked');
    modal.classList.remove('hidden');
    overLay.classList.remove('hidden');
}

for(let i=0 ; i < btnsOpenModal.length ; i++){
    btnsOpenModal[i].addEventListener('click',openModal)
}

const closeModal =()=>{
    modal.classList.add('hidden');
    overLay.classList.add('hidden');
}

btnCloseModal.addEventListener('click',closeModal);
overLay.addEventListener('click',closeModal);

document.addEventListener('keydown', function(e){
    if(e.key === "Escape" && !modal.classList.contains('hidden')){
            closeModal();
        }
    }
)

