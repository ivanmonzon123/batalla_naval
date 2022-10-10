
import { toMatrix } from '../Helpers/toMatrix'

export function findWin(table) {
    let theTable = toMatrix(table)
    let res = true;
    theTable.map((fila)=>{
        fila.map((column)=>{
            if(column == '1'){
                res = false;
            }
        })
    })
   
    return res;
  }

//   console.log('los datos',theTable)
//   if(theTable.length === 0){res = false}