interface AudioPlayer{
    audioVolumen: number;
    songDuration:number;
    song :string;
    details:Details;
}

interface Details{
    author:string;
    year:number;
}
const audioPlayer:AudioPlayer={
    audioVolumen: 90,
    songDuration: 36,
    song: "March",
    details: {
        author:"Rambo",
        year:2022
    }
}
const {songDuration, details}=audioPlayer;// Para desestructurar objetos anidados es primero esencial desestructurar el objeto y luego lo que se necesita

const {author}=details;
//console.table(`Duracion es ${songDuration}`);
//console.table(`El autor es  ${author} `);
const [,,trunk] : string []=['goku','vegeta','trunsk'];

console.log(`personaje 3 ${trunk}`);

export{};