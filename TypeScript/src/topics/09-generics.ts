export function mytype<T>(argument:T):T {
    return argument;
}
let  amIString=mytype<string>('hola mundo');
let  amINumber=mytype<number>(1500);
let Array=mytype<number[]>([1,2,3,4,5]);
console.log(`texto : ${amIString.split(' ')}`);
console.log(`numeros : ${amINumber.toFixed()}`);
console.log(`Array : ${Array.join('-')}`);