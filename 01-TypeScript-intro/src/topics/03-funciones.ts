function addNumbers(a:number,b:number):number {
    return a+b;
}

const addNumbersArrow = (a:number,b:number):string=>{
    return `${a+b}`;
}
function multiplicar (primerNumero:number, segundoNumero?:number,base:number=2):number{
        return primerNumero * base ;
}

//const resultados= addNumbers(15,5);
//const resultadoM:number= multiplicar(5) ;
//const resultadosFlecha=addNumbersArrow(1,3);
//console.table({resultados,resultadosFlecha,resultadoM});

interface Character{
    name: string;
    hp:number;
    showph: ()=>void;
}

const healCharacter=(character:Character, amount:number)=>{
    character.hp +=amount;
}
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