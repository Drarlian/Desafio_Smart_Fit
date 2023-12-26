import React from 'react';
import { DivFooter } from './styles';
import logo from '../../assets/images/logo.svg';

const Footer: React.FC = () => {
  return (
    <DivFooter>
        <img src={logo} className='imagem-logo' />
        <p>Todos os direitos reservados - 2020</p>
    </DivFooter>
  );
}

export default Footer;