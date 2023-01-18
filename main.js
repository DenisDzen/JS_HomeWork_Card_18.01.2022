let price = document.getElementsByClassName('.input');
let productCount = document.querySelector('.product-count');
let totalCount = document.querySelector('.total-count');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');

//Functions

function multiply () {
        totalCount.innerHTML = value * productCount.innerHTML;
}

function subtraction () {
        totalCount.innerHTML = totalCount.innerHTML - value;
}

let value = 0;

const changeHandler = e => {
    value = e.value;
    e.value = value.replace(/\D/g, '');
    console.log(value);
}

//

plus.addEventListener('click', ()=> {
    productCount.innerHTML = +productCount.innerHTML + 1;
    multiply ();
})

minus.addEventListener('click', ()=> {
    if (productCount.innerHTML > 0) {
        productCount.innerHTML = +productCount.innerHTML - 1;
        subtraction ();
    }
})





















