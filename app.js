const { Calculadora, ejemplo } = require("./clase/calculadora")

console.log("hola desde app: ",ejemplo)

//instanciamos el objeto claculadora
let calculadora= new Calculadora();

calculadora.suma(2,3)
console.log("suma: ",calculadora.suma(2,3))