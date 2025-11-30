let habilidates : string[] = ['ataque','vida','fuerza'];

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



export{};