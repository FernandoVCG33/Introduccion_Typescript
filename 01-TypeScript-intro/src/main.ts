import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML=`Hola mundo empezamos con Angular`;
console.log("esta es mi primera app en Angular y aprendiendo TypeScript");
for(let x= 0 ; x<=10  ;x++){
  console.log(` el numero es: ${x}`);
}