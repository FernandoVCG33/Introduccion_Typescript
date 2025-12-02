function addNumbers(a:number,b:number):number {
    return a+b;
}

const addNumbersArrow = (a:number,b:number):string=>{
    return `${a+b}`;
}
function multiplicar (primerNumero:number, segundoNumero?:number,base:number=2):number{
        return primerNumero * base ;
}
function resta(firtsNumber:number, secondNumber:number):number {
    return firtsNumber+ secondNumber  ;
}
//const resultados= addNumbers(15,5);
//const resultadoM:number= multiplicar(5) ;
//const resultadosFlecha=addNumbersArrow(1,3);
const  reultadoResta =resta(15,9);
//console.table({resultados,resultadosFlecha,resultadoM});
console.log(`La resta e:  ${reultadoResta}`);


//definimos interfaz
interface Character{
    name: string;
    hp:number;
    showph: ()=>void;
}
//funcion vacia curar al personaje
const healCharacter=(character:Character, amount:number)=>{ //funcion vacia en TS
    character.hp +=amount;
}
// definimos el objeto
const strider:Character= { 
    name:"Cr7",
    hp:1500,
    showph(){
        console.log(`Puntos de vida  ${this.hp}`)
    }
}

healCharacter(strider,10);
strider.showph();
export{};