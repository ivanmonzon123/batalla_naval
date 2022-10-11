export function changeForm(table) {
  function clear(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
      const data = arreglo[i];
      if (data === ".") {
        arreglo[i] = "X";
      }
    }
  }

  function save(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
      const data = arreglo[i];
      if (data === ".") {
        arreglo[i] = "-";
      }
    }
  }

  table.map((fila) => {
    for (let index = 0; index < fila.length; index++) {
      if (fila[index] === "X") {
        fila[index] = ".";
        if (fila[index + 1] === "1") {
          clear(fila);
        }
        if (
          fila[index + 1] === undefined ||
          fila[index + 1] === " " ||
          fila[index + 1] === "O"
        ) {
          save(fila);
        }
      }
    }
  });
  console.log(table)
  return table;
}
