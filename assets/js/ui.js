
import { save } from './localstorage.js';

const  images = [
    "./assets/img/img1.jpeg",
    "./assets/img/img3.jpeg",
    "./assets/img/img4.jpeg",
    //"./assets/img/img5.jpeg",
    
    "./assets/img/img6.jpeg",
    "./assets/img/img2.jpeg" 
];

const imgCards = document.querySelector('#img-cards.flex-container');
const selectedcard = document.querySelector('#prev-card-img');
const postCardsbuttom = document.querySelector('#post-cards-list');
const carousel = document.querySelector('.carousel-inner');
const carouselIndicators = document.querySelector('.carousel-indicators');
const ldsSpinner = document.querySelector('.lds-spinner');




// funcion para mostrar en pantalla las imagenes del arreglo images
export    function printImg () {
     
     imgCards.innerHTML = '';
     carousel.innerHTML = '';
     let active = 'active';
   
     images.forEach(  (image) => {
         

            const div = document.createElement('div');
            div.className = 'card text-bg-dark m-2 p2 ';
            div.id= image;
            div.innerHTML = `
            <img src="${image}"  class="card-img" alt="..." width="120" height="120">
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
             
            </div>
              
             `;
           imgCards.appendChild(div); 

           const divm = document.createElement('div');
           divm.className = `carousel-item ${active}`;
           
           divm.id= image;
              divm.innerHTML = `
              <img src="${image}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
            </div>
             `;
            const button = document.createElement('button');
            button.className = active;
            console.log(image);
            button.setAttribute('data-bs-target', '#carouselExampleIndicators');
            button.setAttribute('data-bs-slide-to', `${images.indexOf(image)}`); 
            button.setAttribute('aria-current', 'true');
            button.setAttribute('aria-label', `Slide ${images.indexOf(image)}`);
            console.log(images.indexOf(image));
            carouselIndicators.appendChild(button);
            console.log(button);

            carousel.appendChild(divm);
            active = '';
            
             
        }
   )
};

export  async function  selectedImg (src) {
   
   
    await spinner(src);
   
    selectedcard.setAttribute('src', src);

    
 
};

export  function countCards (cards) {
    let count = 0;
    Object.values(cards).forEach(  (card) => {
        count++;
    });
    postCardsbuttom.innerHTML = `PostCard List (${count}) `;

    save(cards);


};
export function  clearselectedImg () {
    selectedcard.setAttribute('src', "");
    selectedcard.setAttribute('class', "");

}



export function renderMessage(message, colorMessage, secondsToRemove) {
    const div = document.createElement('div');
    div.className = `alert alert-${colorMessage} message`;

    div.appendChild(document.createTextNode(message));

    const childElement = document.querySelector('.alert-banner');
    const parentElement = document.querySelector('.text-center');

    parentElement.insertBefore(div, childElement);
    setTimeout(() =>{
            document.querySelector('.message').remove();
    }, secondsToRemove);


}; 

async function spinner (src) {
    
    ldsSpinner.style.display = 'block';
    selectedcard.style.display = 'none';
    let randontime = Math.floor(Math.random() * 500) + 1000;
    await new Promise(resolve => setTimeout(resolve, randontime));

    ldsSpinner.style.display = 'none';
    selectedcard.style.display = 'block';
    selectedcard.setAttribute('src', src);
    selectedcard.setAttribute('class', "img-fluid");
}

    
