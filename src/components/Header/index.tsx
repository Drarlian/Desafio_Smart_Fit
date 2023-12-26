import React from 'react';
import { DivHeader } from './styles';
import logo from '../../assets/images/logo.svg';

// import { Container } from './styles';

const Header: React.FC = () => {
    return (
        <DivHeader>
            <img src={logo} className='imagem-logo' />
        </DivHeader>
    );
}

export default Header;