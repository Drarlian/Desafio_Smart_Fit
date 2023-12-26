import React from 'react';
import { DivLegenda } from './styles';
import mascaraVerde from '../../assets/images/required-mask.png';
import mascaraCinza from '../../assets/images/recommended-mask.png';

const Legenda: React.FC = () => {
  return (
    <DivLegenda>
      <div className='legenda-principal'>
      <div className='legenda-elementos'>
        <p>Máscara</p>
          <div className='container-imagens'>
            <div>
              <img src={mascaraVerde} />
              <p>Obrigatório</p>
            </div>
            <div>
              <img src={mascaraCinza} />
              <p>Recomendado</p>
            </div>
          </div>
        </div>
        
      </div>
    </DivLegenda>
  );
}

export default Legenda;