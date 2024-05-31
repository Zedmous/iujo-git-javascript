const colors = require('colors');
const { Calculadora, ejemplo } = require("./clase/calculadora")

console.log("hola desde app: ".blue,ejemplo)

//instanciamos el objeto claculadora
let calculadora= new Calculadora();

calculadora.suma(2,3)
console.log("suma: ",calculadora.suma(2,3))

console.log("resta: ",calculadora.resta(2,3))

console.log("multiplicacion: ",calculadora.multi(2,3))

console.log("division: ",calculadora.division(6,3))

console.log("division con 0: ",calculadora.division(6,0))