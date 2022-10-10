import React from 'react';
import Tablero from '../Componets/Tablero'
import FormAtaque from '../Componets/FormAtaque';
const PageTableroB = () => {
    return (
        <div className='w-100 d-flex justify-content-evenly align-items-center' style={{height: '100vh'}}>
            <Tablero/>
            <Tablero/>
            <FormAtaque/>
           
        </div>
    );
}

export default PageTableroB;
