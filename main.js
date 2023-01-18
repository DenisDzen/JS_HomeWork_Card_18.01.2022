let price = document.getElementsByClassName('.input');
let productCount = document.querySelector('.product-count');
let totalCount = document.querySelector('.total-count');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');

//Functions

//Функція множення кількості та ціни

function multiply () {
    if (productCount.innerHTML > 0) {
        totalCount.innerHTML = value * productCount.innerHTML;
    } else {
        totalCount.innerHTML = 0;
    }
}

//Функція віднімання кількості 

function subtraction () {
    if (productCount.innerHTML > 0) {
        totalCount.innerHTML = totalCount.innerHTML - value;
    } else {
        totalCount.innerHTML = 0;
    }
}

//Функція що не пропускає літери до поля вводу та приймає значення вводу

let value; 

const changeHandler = e => {
    value = e.value;
    e.value = value.replace(/\D/g, '');
    console.log(value);
}

// Додавання за кліком

plus.addEventListener('click', ()=> {
    productCount.innerHTML = +productCount.innerHTML + 1;
    multiply ();
})

// Віднімання за кліком

minus.addEventListener('click', ()=> {
    if (productCount.innerHTML > 0) {
        productCount.innerHTML = +productCount.innerHTML - 1;
        subtraction ();
    }
})





















