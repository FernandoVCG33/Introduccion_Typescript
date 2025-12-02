export class Person {
    //public name:string ;
    //public address:string;
    constructor(
        public name: string , 
        public lastname: string,
        public firtName:string,
        private address: string= 'No addres'){ 

        }
}

export class Hero {
    //public person: Person;
    constructor(
        public alterEgo:string,
        public age:number,
        public realName:string,
        public person:Person
    ){
      //this.person= new Person(realName);  
    }
}
const persona1= new Person('Tony','Stark', 'Tony');
const ironman= new Hero('Iron man',45,'TonyS',persona1);
console.log(ironman);
