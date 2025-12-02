export interface Product {
    name:string;
    price:number;
}
const phone : Product={
    name:"Samsung",
    price:1500
}
const tablet:Product={
    name:"S5",
    price:5620
}

interface TaxCalculationOPtions {
    tax:number,
    products:Product[];
}

export function taxCalculation(options:TaxCalculationOPtions):[number,number] {
    const {tax,products}=options;
    let total=0;
    products.forEach(producto=>{
        total+=producto.price;
    })
    return  [total,total* tax] ;
}


const carrito=[phone,tablet];
const tax:number=0.15;


const resultados = taxCalculation({
    products:carrito,
    tax,
});

console.log(`El resultado es : ${resultados[0]}`);
console.log(`El resultado es : ${resultados[1]}`);

const {name:nombreCelular, price:precioCelular}=phone;
const {name:nombreTablet, price:precioTblet}=tablet;
const [productosC,]=resultados;
const [,productosC2]=resultados;

console.warn(`DESESTRUCTURACION: `);
console.log(`Nombre del celular es : ${nombreCelular} `);
console.log(`El precio del celular es : ${precioCelular} `);
console.log(`El nombre de la tablet es : ${nombreTablet} `);
console.log(`El precio de la tablet es : ${precioTblet} `);
console.log(`Los resultados son : ${productosC} `);
console.log(`Los resultados son tax : ${productosC2} `);
