//debes colocar Type para importar una interfaz
import { taxCalculation, type Product } from './06-funcion-desestructuracion';


const carritoPoductos:Product[]=[
    {
        name:"Computadora",
        price:1500
    }
    ,
    {
        name:"Ipad",
        price: 2500
    }
];

//tax = 0.15
const [total,tax]=taxCalculation({
      products: carritoPoductos ,
      tax:0.15      
});
console.log(`Total ${total}`);
console.log(`Tax  ${tax}`);
