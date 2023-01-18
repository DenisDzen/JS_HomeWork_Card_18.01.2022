let price = document.getElementsByClassName('.input');
let productCount = document.querySelector('.product-count');
let totalCount = document.querySelector('.total-count');
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');

//Functions

//Функція множення кількості та ціни

function multiply () {
        totalCount.innerHTML = value * productCount.innerHTML;
}

//Функція віднімання кількості 

function subtraction () {
        totalCount.innerHTML = totalCount.innerHTML - value;
}

//Функція що не пропускає літери до поля вводу та приймає значення вводу

let value = 0;

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





















