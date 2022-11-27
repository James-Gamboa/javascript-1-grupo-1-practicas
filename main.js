//clase 2
/*String -> Number
Boolean -> Number
Number -> String
Boolean -> String
String -> Boolean
Number -> Boolean
ejemplos de for,while,do while,for int
*/

console.log('string -> Number', Number('100'));
console.log('Boolean -> Number', Number(true));
console.log('Number -> String', String(5));
console.log('Boolean -> String', String(false));
console.log('String -> Boolean', Boolean("3"));
console.log('Boolean -> Number', Number(false));


for (let i=0; i< 15; i++ ){
  console.log(i);
}


const obj = {
  pais:'españa',
  codigopostal:'422',
  ciudad:'madrid',
  key: 1
};

// @ts-ignore
for (key in obj) {
  // @ts-ignore
  console.log(obj[key]);
}



let valor1 = 5;

while(valor1 < 15){
  console.log("while", valor1);
  valor1 += 1;
}

let valor2 = 0;



do {
  console.log('do while', valor2);
  valor2 += 1;
} while(valor2 <=  5);