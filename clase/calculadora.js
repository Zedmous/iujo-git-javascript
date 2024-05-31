

let hola="un ejemplo";
class Calculadora{

    constructor(){
        console.log("hola desde calculadora constructor")
    }

    //
    suma= (a,b) => {
        
        return a+b 
    }

}
//
module.exports={
    Calculadora,
    ejemplo:hola
}