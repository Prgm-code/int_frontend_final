

// 
export function save (card) {

    localStorage.setItem('postCards', JSON.stringify(card));

    
}

export function get () {
    return JSON.parse(localStorage.getItem('postCards'));
}