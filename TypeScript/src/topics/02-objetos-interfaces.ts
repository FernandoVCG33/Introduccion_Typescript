
let habilidates : string[] = ['ataque','vida','fuerza'];
// permiten definir la forma o estructura que deben tener los objetos
interface caracter {
    name : string ;
    edad : number;
    habilidades : string[];
    nivelPoder?: number;

}
const strider:caracter  = {
    name :'Rafel',
    edad: 15,
    habilidades:['poder','fuerza']
}
strider.nivelPoder=15;

interface Humano{
    sexo:string;
    edad:number;
    estaVivo: boolean;
    nombre:string;
    gustos?:string;
}
let persona1:Humano={
    sexo:"Masculino",
    edad:21,
    estaVivo:true,
    nombre:"Fernando",
}
persona1.gustos="Juegos";

/*For in */
for (let caracteristicas in  persona1){
    console.log(`${caracteristicas}  ${persona1[caracteristicas as keyof Humano]} `); // si se deses leer 
}

export{};