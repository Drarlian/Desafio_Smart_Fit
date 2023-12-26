import React from 'react';
import { DivFormulario } from './styles';
import imagemHora from '../../assets/images/icon-hour.png';

// import { Container } from './styles';

const Formulario: React.FC = () => {

  function alterar(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();
  }

  return (
    <DivFormulario>
      <div className='formulario-principal'>
        <form>
          <div className='formulario-titulo'>
            <img src={imagemHora} />
            <p>Horário</p>
          </div>
          <h2>Qual perído quer treinar?</h2>
          <div className='formulario-linha'>
            <div className='formulario-linha-interna'>
              <div>
                <input type='radio'></input>
              </div>
              <p>Manhã</p>
            </div>
            <p>06:00 às 12:00</p>
          </div>
          <div className='formulario-linha'>
            <div className='formulario-linha-interna'>
              <div>
                <input type='radio'></input>
              </div>
              <p>Tarde</p>
            </div>
            <p>12:01: às 18:00</p>
          </div>
          <div className='formulario-linha'>
            <div className='formulario-linha-interna'>
              <input type='radio'></input>
              <p>Noite</p>
            </div>
            <p>18:01 às 23:00</p>
          </div>
          <div className='formulario-linha formulario-final'>
            <div className='formulario-linha-interna'>
              <div>
                <input type='checkbox'></input>
              </div>
              <p>Exibir unidades fechadas</p>
            </div>
            <p>Resultado(s) encontrado(s): <strong style={{'color': 'black'}}>0</strong></p>
          </div>
          <div className='formulario-botoes'>
            <button className='botao-colorido' onClick={(e) => alterar(e)}>Encontrar Unidade</button>
            <button onClick={(e) => alterar(e)}>Limpar</button>
          </div>
        </form>
      </div>
    </DivFormulario>
  );
}

export default Formulario;