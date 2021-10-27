

let num1 = 98;
let num2 = 24;
let myStyle = `font-family:sans-serif;
                color:#fff;
                font-weight: 500;
                border-radius: 10px;
                background:#00A7AF;
                padding: 5px;`;

let myStyle1 = `font-family:sans-serif;
color:#fff;
font-weight: 500;
border-radius: 10px;
background:#5D7814;
padding: 5px;`;

console.log(`%cNumero1 = ${num1}`, myStyle1);
console.log(`%cNumero2 = ${num2}`, myStyle1);
suma(num1,num2,myStyle);
resta(num1,num2,myStyle);
multiplicacion(num1,num2,myStyle);
division(num1,num2,myStyle);




function suma(numero1, numero2, myStyle) {
    let resultado = numero1 + numero2;
    //console.log("Funcion SUMA");
        
        console.log(`%cResultado de suma = ${resultado}`, myStyle);
    //console.groupEnd();

}


function resta(numero1, numero2, myStyle) {
    let resultado = numero1 - numero2;
    //console.log("Funcion SUMA");
        
        console.log(`%cResultado de resta = ${resultado}`, myStyle);
    //console.groupEnd();

}

function multiplicacion(numero1, numero2, myStyle) {
    let resultado = numero1 * numero2;
    //console.log("Funcion SUMA");
        
        console.log(`%cResultado de multiplicacion = ${resultado}`, myStyle);
    //console.groupEnd();

}

function division(p1, p2, p3) {
    let resultado = p1 / p2;
    //console.log("Funcion SUMA");
        
        console.log(`%cResultado de division = ${resultado}`, p3);
    //console.groupEnd();

}
