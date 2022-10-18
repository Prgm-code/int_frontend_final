

const postCardsList = document.querySelector('#list-cards');
const carousel = document.querySelector('.carousel-inner');
const carouselIndicators = document.querySelector('.carousel-indicators');







//funcion para cambiar el color de las estrellas segun el rating
function printRating(r) {
  let star = ['regular', 'regular', 'regular', 'regular', 'regular'];

  for (let i = 0; i < r; i++) {
    star[i] = 'solid';
  }
  return star;


}
// funcion para mostrar en pantalla las imagenes del arreglo images
export async function listPostCards(postCards) {

  postCardsList.innerHTML = '';
  carousel.innerHTML = '';
  let active = 'active';
  let i = 0;


  Object.values(postCards).forEach(async (card) => {
    

    let star = printRating(card.rating);
    const div = document.createElement('div');


    div.className = 'card m-2';
    div.style = 'width: 32rem';
    div.innerHTML = `
          
            

 
            <img src="${card.image}" class="card-img-top" alt="..." width="" height="">
            <div class="card-body">
              <h5 class="card-title">${card.title}</h5>
              <p class="card-text">${card.comments}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><strong>Posted on:</strong> ${card.postTime}</li>
              <li class="list-group-item"><strong>Author:</strong> ${card.author}</li>
              <div class="input-group mb-2 " id="star-checkbox">
                    <i class="fa-star fa-${star[0]} fa-2x" id="1"></i>
                    <i class="fa-star fa-${star[1]} fa-2x" id="2"></i>
                    <i class="fa-star fa-${star[2]} fa-2x" id="3"></i>
                    <i class="fa-star fa-${star[3]} fa-2x" id="4"></i>
                    <i class="fa-star fa-${star[4]} fa-2x" id="5"></i>
              </div>
            </ul>
            <div class="card-body">
            <div  class="like-btn" id="like-btn">
            <a  class="btn btn-danger ">
                <i class="fa-sharp fa-solid fa-heart whiteincolor"> </i>
                <span>Like</span>
            </a>
            </div>

            `;


    postCardsList.appendChild(div);

    // carousel
    const divm = document.createElement('div');
    divm.className = `carousel-item ${active}`;


    divm.innerHTML = `
              <img src="${card.image}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                <h5>${card.title}</h5>
                <p>${card.comments}</p>
                <time>${card.postTime}</time>
                <author>${card.author}</author>
                <rating>${card.rating}</rating>
            </div>
             `;
    const button = document.createElement('button');
    button.className = active;


    button.setAttribute('data-bs-target', '#carouselExampleIndicators');
    button.setAttribute('data-bs-slide-to', `${i}`);
    button.setAttribute('aria-current', 'true');
    button.setAttribute('aria-label', `Slide ${i}`);
    // console.log(card.image.indexOf(card.image));
    carouselIndicators.appendChild(button);
    ;


    carousel.appendChild(divm);
    i = i + 1;
    active = '';

  });
}
let title = document.querySelector('h5');
let comments = document.querySelector('p');
let postTime = document.querySelector('#time');
let author = document.querySelector('.author');
let starBox = document.querySelector('#star-checkbox');


export function printBox(carouselActive) {

  starBox.innerHTML = '';


  title.innerHTML = (carouselActive.childNodes[3].querySelector('h5')).innerHTML;
  comments.innerHTML = (carouselActive.childNodes[3].querySelector('p')).innerHTML;
  postTime.innerHTML = (carouselActive.childNodes[3].querySelector('time')).innerHTML;
  author.innerHTML = (carouselActive.childNodes[3].querySelector('author')).innerHTML;

  let rating2 = (carouselActive.childNodes[3].querySelector('rating')).innerHTML;
  let n = parseInt(rating2);
  console.log(n);

  let star2 = printRating(n);
  console.log(rating2);


  starBox.innerHTML = `
    <i class="fa-star fa-${star2[0]} fa-2x" id="1"></i>
    <i class="fa-star fa-${star2[1]} fa-2x" id="2"></i>
    <i class="fa-star fa-${star2[2]} fa-2x" id="3"></i>
    <i class="fa-star fa-${star2[3]} fa-2x" id="4"></i>
    <i class="fa-star fa-${star2[4]} fa-2x" id="5"></i>
    `;



}

