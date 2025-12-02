//Bases de TypeScript
const name : string  = "Fernando";
let hpPoints: number | 'FULL' = 45;
let apellido:string | 0="Catacora"; // el operador or nos ayuda a tener una segunda opcion. 
hpPoints = 150 ;
apellido=0;
const isAlive : boolean = true ; 
console.log({
    name,hpPoints,isAlive, apellido
});
export{};