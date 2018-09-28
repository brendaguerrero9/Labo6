function ocurrencias(numero, arreglo){
    var contador = 0;
    for (let i of arreglo){
        if(numero == i){
            contador = contador + 1 ;
        }
    }
    return contador;
}