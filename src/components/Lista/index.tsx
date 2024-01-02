import React from 'react';
import { DivLista } from './styles';
import mascaraVerde from '../../assets/images/required-mask.png';
import toalhaVerde from '../../assets/images/required-towel.png';
import garrafaAmarela from '../../assets/images/partial-fountain.png';
import cabideVermelho from '../../assets/images/forbidden-lockerroom.png';

const Lista: React.FC = () => {
  return (
    <DivLista>
      <div className='lista-principal'>
        <div className='lista-container'>
          <div className='lista-inicio'>
            <p className='lista-status' style={{'color': '#0AAE0A'}}>Aberto</p>
            <h2>Vicente Linhares</h2>
            <p>Rua Tibúrico Cavalcante, 1885 - Meireles <br/> Fortaleza, CE</p>
          </div>
          <div className='lista-imagens'>
            <img src={mascaraVerde} />
            <img src={toalhaVerde} />
            <img src={garrafaAmarela} />
            <img src={cabideVermelho} />
          </div>
          <div className='lista-horarios'>
            <div>
              <h2>Seg. á Sex</h2>
              <p>06h ás 22h</p>
            </div>
            <div>
              <h2>Sáb.</h2>
              <p>09h ás 18h</p>
            </div>
            <div>
              <h2>Dom.</h2>
              <p>Fechada</p>
            </div>
          </div>
        </div>
        <div  className='lista-container'>
          <div className='lista-inicio'>
            <p className='lista-status' style={{'color': '#F72B1B'}}>Fechado</p>
            <h2>Vila Carrão</h2>
            <p>Av. Guilherme Giorgi, 1460, Vila Carrão, <br/>São Paulo SP</p>
          </div>
        </div>
        <div  className='lista-container'>
          <div className='lista-inicio'>
            <p className='lista-status' style={{'color': '#F72B1B'}}>Fechado</p>
            <h2>Vila Carrão</h2>
            <p>Av. Guilherme Giorgi, 1460, Vila Carrão, <br/>São Paulo SP</p>
          </div>
        </div>
      </div>
    </DivLista>
  );
}

export default Lista;