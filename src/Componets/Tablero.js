import Table from 'react-bootstrap/Table';
import '../Styles/Tablero.css'
import { useState } from 'react';
import {doc, getDoc, setDoc, onSnapshot} from "firebase/firestore";
import { db } from '../Firebase/FirebaseConf';
function Tablero({table}) {   
  //console.log('la tabla bamosss',table)
    const [tableroMatrix, settableroMatrix] = useState([]);
    let numero = 65;
    let matrix = [];
  if(table != ''){
    matrix.push(table.A);matrix.push(table.B);
  matrix.push(table.C);matrix.push(table.D);
  matrix.push(table.E);matrix.push(table.F);
  matrix.push(table.G);matrix.push(table.H);
  matrix.push(table.I);matrix.push(table.J);
  }
    
  return (
    <Table responsive bordered  className='tablero_main '>
      
      <tbody>
        <tr>
            <td></td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
            <td>10</td>
        </tr>
        {matrix.map(fila =>(
           <tr className='Fila-Tablero'>
            <td>{String.fromCharCode(numero++)}</td>
            {fila.map((column)=>(<td  className='Column-Tablero'>{column}</td>))}
           </tr>
        ))}
       
      </tbody>
    </Table>
  );
}

export default Tablero;