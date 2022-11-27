/*Dado un arreglo de enteros, comprobar el mayor, el menor y por último la media de todos.*/
function diferencia(){
    var arr = [1,2,3,4,5];
    var mayor = 0;
    var menor = arr[0];
    
    for (var i=0; i<arr.length; i++){
      if(mayor < arr[i]){
        mayor = arr[i];
      }
      if (arr[i] < menor){
        menor = arr[i];
      }
    }
    resultado = mayor - menor;
    return resultado;

    }
    var resultado = diferencia();
    console.log(resultado);