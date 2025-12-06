interface AudioPlayer{
    audioVolumen: number;
    songDuration:number;
    song :string;
    details:Details;
}
//Details Interfaz
interface Details{
    author:string;
    year:number;
}
//Objeto audioPlayer
const audioPlayer:AudioPlayer={
    audioVolumen: 90,
    songDuration: 36,
    song: "March",
    details: {
        author:"Rambo",
        year:2022
    }
}
// Para desestructurar objetos anidados es primero esencial desestructurar el objeto y luego lo que se necesita
const {songDuration:duracion, details}=audioPlayer;

const {author:autor}=details;
console.table(`Duracion de la cancion es: ${duracion}`);
console.table(`El autor es  ${autor} `);

//Desestructuracion de arreglos
const  bnha:string[] =["Deku","Uraraka","All might"];
const [,p_2,]  =bnha;

const [,,trunk] : string []=['goku','vegeta','trunsk'];

console.log(`personaje 3 ${trunk} y el personaje de bnha es ${p_2}`);

export{};