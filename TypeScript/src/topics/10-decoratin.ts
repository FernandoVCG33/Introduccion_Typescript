
function classDecoration<T extends {new (... args:any[]):[]}> (constructor:T) {
    return class extends constructor{
        newProperty='new';
        hello = "ovwerride" ;
    }
}

@classDecoration
export class SuperClass{
    public myProperty:string='abc12';
    print(){
        console.log('Hola Mundo');
    }
}
console.log(SuperClass);
const myClass=new SuperClass();
console.log(myClass);