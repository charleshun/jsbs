let age =27;
let year = 2019;

//alert('hello');
console.log(year, age);

const sum = (a,b) => {
    return a+b;
}
//module.exports = sum; //jest not run

//const ul = document.querySelector('.people');
const names = ['shaun','mario','luigi','ryu'];

let html = ``;

names.forEach((name) => {
    html+= `<li style="">${name}</li>`;
});
console.log(html);

//console.log(ul);

const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
    return total;
    }
   
    console.log('bill:'+bill([10,15,30], 0.2));


