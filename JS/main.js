const openModal = document.querySelector('.redesBtn');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-cerrar');


openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal-show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal-show');
});
