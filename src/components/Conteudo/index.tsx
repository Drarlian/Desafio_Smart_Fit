import React from 'react';
import { DivConteudo } from './styles';
import Titulo from '../Titulo';
import Formulario from '../Formulario';
import Lista from '../Lista';
import Legenda from '../Lengda';

// import { Container } from './styles';

const Conteudo: React.FC = () => {
  return (
    <DivConteudo>
        <Titulo />
        <Formulario />
        <Legenda />
        <Lista /> 
    </DivConteudo>
  );
}

export default Conteudo;