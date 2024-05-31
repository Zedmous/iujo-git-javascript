

let hola="un ejemplo";
class Calculadora{

    constructor(){
        console.log("hola desde calculadora constructor")
    }

    //
    suma= (a,b) => {
        
        return a+b 
    }
    resta= (a,b) => {
        
        return a-b 
    }
    multi= (a,b) => {
        
        return a*b 
    }

    division= (a,b) => {
        if(b!=0)
            return a/b
        return 0
    }
}
//
module.exports={
    Calculadora,
    ejemplo:hola
}