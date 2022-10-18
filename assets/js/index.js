import { countCards, printImg , selectedImg ,clearselectedImg , renderMessage } from './ui.js';

import { ratingStar, getRating , resetStar} from'../js/ratingStar.js';


let postCards = {};


document.addEventListener('DOMContentLoaded',  () => {


    // asigna variables de los datos de el formulario 
    let titleInput = document.getElementById('title');
    let authorInput = document.getElementById('author');
    let imageInput = document.getElementById('prev-card-img');
    let commentsInput = document.getElementById('comments');
    let deleteall = document.getElementById('delete-all');

    const allInputs = document.querySelectorAll('input');

        // Chequeo de class "is-invalid"
        allInputs.forEach(input => {
            input.addEventListener('change', function (event) {
                if (event.target.value !== "") {
                    input.classList.remove('is-invalid');
                }
            })
        })


    if (localStorage.getItem('postCards') !=={} && localStorage.getItem('postCards') !== null  ){
        console.log('hay datos en el localstorage');
        postCards = JSON.parse(localStorage.getItem('postCards')); // obtiene los datos como string por lo que se utiliza parse 
        countCards(postCards); // muestra el numero de tarjetas en el contador
    }



    printImg(); // imprime las imagenes en el array images
     

     document.getElementById('img-cards')
     .addEventListener('click',  (e) => {
         
         if (e.target.classList.contains('card-img-overlay')) {
             selectedImg(e.target.parentElement.id); // selecciona la imagen del card
         }
         e.preventDefault();

    });

    document.getElementById('carousel')
    .addEventListener('click',  (e) => {
        if (e.target.classList.contains('d-block')) {
            
            selectedImg(e.target.parentElement.id);//// selecciona la imagen del carousel
        } 
        e.preventDefault();
    });

    


    ratingStar();   // funcion para cambiar el color de las estrellas
    // funcion para agregar tarjetas
    document.getElementById('createBottom')
    .addEventListener('click',  (e) => {
        e.preventDefault();
        
        
                
        let card ={
            title: titleInput.value,
            postTime: new Date().toLocaleString(),
            author: authorInput.value,
            comments: commentsInput.value,
            rating: getRating(),
            image: imageInput.getAttribute('src')
        }
        
        if (card.title ==="") titleInput.classList.add('is-invalid');
        if (card.author ==="") authorInput.classList.add('is-invalid');
        if (card.title !==""  && card.author !=="" && card.image !=="" && card.rating !== 0) {
            allInputs.forEach(input => {
                input.classList.remove('is-invalid');

            })

            postCards[card.postTime] = {...card};
            countCards(postCards);

            //vacia formulario
            titleInput.value = "";
            authorInput.value = "";
            commentsInput.value = "";
            clearselectedImg();
            resetStar();
            renderMessage('New PostCard Added', 'success', '3000');
            console.log(postCards);


            
        }else{
            renderMessage('Please complete all fields, set rating & select image', 'danger', '7000');
        }
    });

    
    //elimina todas las tarjetas
    deleteall.addEventListener('click',  (e) => {
        
        localStorage.clear();
        
        renderMessage('All PostCards Deleted!!,', 'danger', '3000');
        renderMessage('Please wait refresh...', 'info', '2000');
        e.preventDefault();
        setTimeout(() => {
            window.location.reload();
        }, 3000);

    }   );
    

});

