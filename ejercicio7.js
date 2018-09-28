function incerteza(arreglo){
    var contador = 0;
    for( let i of arreglo){
        contador = contador + 1;
    }
    console.log("El promedio es:" + 1/contador );
    console.log("La incerteza es:" + Math.sqrt((1/contador - 1)))
}