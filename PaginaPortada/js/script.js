//EJERCICIO 0

function Imprimir() {
            
    let valor1 = parseInt(document.getElementById("txtvalor1").value)
    let valor2 = parseInt(document.getElementById("txtvalor2").value)
    let result = ""

    if(valor1 > 0){

        if(valor2 > valor1){

            for (let i = valor1; i <= valor2; i++) {

                if(i%2 === 1)
                    result += i + "\n"
            }

        }else
            result = "El segundo valor debe ser más alto que el primero"
    }else
        result = "El valor inicial debe ser un número positivo mayor a 0"

    document.getElementById("txtsalida").value = `${result}`
}

function Limpiar() {
    
    document.location.reload()
} 

//EJERCICIO 1

function Reves() {
                
    let text = document.getElementById("txtvalor").value

    text = text.split('').reverse().join("")

    document.getElementById("txtsalida").innerHTML = `Palabra al revés: ${text}`
}


//EJERCICIO 2

function Fibonacci() {
    var x = 0, y = 1, z;

    let valor = document.getElementById("txtvalor").value
    let fibo = "[" + y + "]";

    for(i = 0; i < valor; i++){
        z = x+y;
        fibo += "[" + z + "]";
        y = x; x = z;
    }

    document.getElementById("txtsalida").innerHTML = `Serie Generada: ${fibo}`
    
}


//EJERCICIO 3

function Polindromo(){

    let text = document.getElementById("txtvalor").value

    if(text.length !== 0){

        if(text.split('').reverse().join('') == text){
            document.getElementById("txtsal").innerHTML = `Es una palabra polindromo`
        }else{
            document.getElementById("txtsal").innerHTML = `No es palabra polindromo`
        }
    }else{
        document.getElementById("txtsal").innerHTML = `Debe Completar el Campo`
    }
}

//EJERCICIO 4

function KnowDate() {
    
    let date = document.getElementById("txtvalor").value
    let fecha;

    var d = new Date(date);
    var aux = new Date(date);

    d.setDate(aux.getDate() - (aux.getDate() - 1));
    fecha = d+ "\n";

    for(var i = 31; i > 27; i--){

        d.setDate(i);
        if(d.getMonth() >aux.getMonth()){
            d = new Date(date);
        }else{

            fecha += d+ "\n";
            break
        }
    }
    document.getElementById("txtsalida").innerHTML = `${fecha}`
}


//EJERCICIO 5

function CalculateDamage() {

    let type1 = (document.getElementById("txtvalor1").value).toLowerCase()
    let type2 = (document.getElementById("txtvalor2").value).toLowerCase()
    let attack = (document.getElementById("txtvalor3").value).toLowerCase()
    let defense = (document.getElementById("txtvalor4").value).toLowerCase()

    var efficacy = 0.5;
    
    if(type1 != type2){

        if(type1 == "fuego" && type2 == "hierba") efficacy = 2;
        if(type1 == "agua" && type2 == "fuego") efficacy = 2;
        if(type1 == "hierba" && type2 == "agua") efficacy = 2;
        if(type1 == "electrico" && type2 == "agua") efficacy = 2;
        if(type1 == "agua" && type2 == "roca") efficacy = 2;
        if(type1 == "roca" && type2 == "electrico") efficacy = 2;
        if((type1 == "fuego" && type2 == "electrico") || (type2 == "fuego" && type1 == "electrico")) efficacy = 1;
        if((type1 == "fuego" && type2 == "hierba") || (type2 == "fuego" && type1 == "hierba")) efficacy = 1;
        if((type1 == "fuego" && type2 == "roca") || (type2 == "fuego" && type1 == "roca")) efficacy = 1;
    }

    var result = Math.round((50 * (attack / defense) * efficacy),2)

    document.getElementById("txtsalida").innerHTML = `Total del daño generado ${result}`

}



