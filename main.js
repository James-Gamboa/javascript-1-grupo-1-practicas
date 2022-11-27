//Realizar un objeto que tenga al menos 5 propiedades y 3 métodos que modifiquen propiedades internas.
const computadora = {
  id: 2000,
  marca: "Apple",
  ram: 6,
  procesador: "intel core 8",
  anio: 2017,
  modificar: function (id) {
    this.id = id;
  },
  year: function (anio) {
    this.anio = anio;
  },
  mark: function (marca) {
    this.marca = marca;
  },
};

console.log(computadora);

// @ts-ignore
delete computadora.ram;

console.log(computadora);

computadora.modificar("1002");
console.log(computadora.id);

computadora.year("2022");
console.log(computadora.anio);


computadora.mark("toshiba");
console.log(computadora.marca);

console.log(Object.keys(computadora));

// @ts-ignore
for(valor in computadora){
  console.log(computadora);
}