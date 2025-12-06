// Chaininf
export interface Passenger{
    name:string,
    childer?:string[];
}
const pasajero1:Passenger={
    name:"Fernando",
    childer:["Maor","Morgan"]
};
const pasajero2:Passenger={
    name:"Erick",
    
};

const printChildren=(pasajero:Passenger)=>{
    const cuantosN=pasajero.childer?.length || 0;
    console.log(`La cantidad de hijos que tiene el pasajero ${pasajero.name} son: ${cuantosN}`);
};

printChildren(pasajero1);
printChildren(pasajero2);