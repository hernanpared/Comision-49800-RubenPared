
function rm(){

let kg = parseFloat(prompt("Ingre el peso en kilogramos"));
let rep = parseInt(prompt("Ingrese la cantidad de repeticiones realizadas"));

const num = 30;


let rm = kg *(1 + rep / num)

alert(`Tu 1RM = ${rm}`)



}