import React from 'react';
import { DivTitulo } from './styles';

// import { Container } from './styles';

const Titulo: React.FC = () => {
  return (
    <DivTitulo>
      <div className='titulo-principal'>
        <h1>REABERTURA <br/> SMART FIT</h1>
        <span className='traco-pequeno' />
        <p>O horário de funcionamento das nossas unidades está seguindo os decretos de cada município. Por isso, confira aqui se a sua unidade está aberta e as medidas de segurança que estamos seguindo.</p>  
      </div>
    </DivTitulo>
  );
}

export default Titulo;