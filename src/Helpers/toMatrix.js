export function toMatrix(table) {
  let matrix = [];
  if (table != "") {
    matrix.push(table.A);
    matrix.push(table.B);
    matrix.push(table.C);
    matrix.push(table.D);
    matrix.push(table.E);
    matrix.push(table.F);
    matrix.push(table.G);
    matrix.push(table.H);
    matrix.push(table.I);
    matrix.push(table.J);
  }
  return matrix;
}
