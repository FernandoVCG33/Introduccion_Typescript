//debes colocar Type para importar una interfaz
import { taxCalculation, type Product } from './06-funcion-desestructuracion';


const carritoPoductos:Product[]=[
    {
        name:"S 25",
        price:1500
    }
    ,
    {
        name:"Iphone 17",
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
