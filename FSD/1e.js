function greet(){
    return "Hello from function declaration!";
}
const welcome=function(){
    return "Hello from function expression!";
};
const arrowGreet=()=>{
    return "Hello from arrow function!";
};
console.log(greet());
console.log(welcome());
console.log(arrowGreet());