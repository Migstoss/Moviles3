var elementos = [
  "Hidrógeno",
  "Helio",
  "Litio",
  "Beril­io"
];

//Sin función flecha
elementos.map(function(elemento){ 
    return elemento.length;
});  // [8, 6, 7, 9]

//Con función flecha
elementos.map((elemento) => {
  return elemento.length;
}); // [8, 6, 7, 9]

elementos.map(({length}) => length); // [8, 6, 7, 9]