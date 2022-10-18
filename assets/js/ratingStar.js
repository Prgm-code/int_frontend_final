

let rating = 0;


//funcion escucha para cambiar el color de las estrellas
    export function ratingStar () {
    document.getElementById('star-checkbox')
    .addEventListener('click', (e) => {
        
           if (e.target.classList[1] === "fa-star"){
            rating = Number(e.target.id);
            console.log(rating);
            setSolidstar(rating);
           
           };
        
        e.preventDefault();
    });
    
}
// funcion para cambiar el color de las estrellas 
function setSolidstar (rating) {

    let star = document.querySelectorAll('.fa-star');
    star.forEach(element => {
        element.classList.remove('fa-solid');
        element.classList.add('fa-regular');
    });
    for (let i = 0; i < rating; i++) {
        star[i].classList.add('fa-solid');
    }
};

//devuelve el valor de la estrella seleccionada
export function getRating () {
    return rating;
};

export function resetStar () {
    rating = 0;
    let star = document.querySelectorAll('.fa-star');
    star.forEach(element => {
        element.classList.remove('fa-solid');
        element.classList.add('fa-regular');
    });

}


