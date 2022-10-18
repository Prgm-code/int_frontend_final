
import {listPostCards , printBox} from '../js/uiPostCards.js';
import {get} from'../js/localstorage.js';
 
const deleteall = document.getElementById('delete-all');

  
let postCards = {};


document.addEventListener('DOMContentLoaded', () => {
    postCards = get();

    if (postCards) {
        console.log('hay datos en el localstorage');        

    }else{
        alert('No hay datos en el localstorage');
    }

    listPostCards(postCards);
    
    let carouselActive = document.querySelector('.carousel-item.active'); 
    printBox(carouselActive);

    document.getElementById('carousel')
    .addEventListener('click',  (e) => {
        if (e.target.classList.contains('d-block')) {
            console.log(e.target.parentElement);//// selecciona la imagen del carousel
        } 
        e.preventDefault();
    });

    document.querySelector('.carousel-control-prev-icon')
    .addEventListener('click',  (e) => {
        if (e.target.classList.contains('carousel-control-prev-icon')) {
            setTimeout(() => {
                let carouselActive = document.querySelector('.carousel-item.active'); 
                printBox(carouselActive);
           
                
            }, 700);
            }
        e.preventDefault();
    });

    document.querySelector('.carousel-control-next-icon')
    .addEventListener('click',  (e) => {
        if (e.target.classList.contains('carousel-control-next-icon')) {
            setTimeout(() => {
                let carouselActive = document.querySelector('.carousel-item.active'); 
                printBox(carouselActive);
           
                
            }, 700);
        }
        e.preventDefault();
    });



    deleteall.addEventListener('click', (e) => {
        localStorage.clear();
        location.reload();
        e.preventDefault();
    }  );   

    document.querySelector('.btn-danger')
    .addEventListener('click',  (e) => {
        console.log(e.target);
        if(e.target.classList.contains('btn-danger')){
          
            let i=  1;
            e.target.innerHTML = `
            <i class="fa-sharp fa-solid fa-heart whiteincolor"> </i>
            <span>${i}</span>
            `;
            i=i+1;
        };
        e.preventDefault();
    });

});
