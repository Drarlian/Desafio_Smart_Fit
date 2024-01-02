import React, { useRef, useState } from 'react';
import { DivLegenda } from './styles';
import mascaraVerde from '../../assets/images/required-mask.png';
import mascaraCinza from '../../assets/images/recommended-mask.png';
import toalhaVerde from '../../assets/images/required-towel.png';
import toalhaCinza from '../../assets/images/recommended-towel.png';
import garrafaAmarela from '../../assets/images/partial-fountain.png';
import garrafaVermelha from '../../assets/images/forbidden-fountain.png';
import cabideVerde from '../../assets/images/required-lockerroom.png';
import cabideAmarelo from '../../assets/images/partial-lockerroom.png';
import cabideVermelho from '../../assets/images/forbidden-lockerroom.png';

const Legenda: React.FC = () => {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  
  const scrollRef = useRef<HTMLDivElement>(null);

  const onDragStart = (e: any) => {
    setIsDragging(true);
    setStartX(e.pageX - (scrollRef.current?.offsetLeft ?? 0));
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grabbing';
    }
  };

  const onDragEnd = () => {
    setIsDragging(false);
    if (scrollRef.current) {
      scrollRef.current.style.cursor = 'grab';
    }
  };

  const onDragMove = (e: any) => {
    if (!isDragging || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 0.05; // Ajuste o multiplicador conforme necessário
    scrollRef.current.scrollLeft -= walk;
  };

  return (
    <DivLegenda>
      <div className='legenda-principal' ref={scrollRef}
      onMouseDown={onDragStart}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onMouseMove={onDragMove}>
        <div className='legenda-elementos'>
          <h3>Máscara</h3>
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

        <div className='legenda-elementos'>
          <h3>Toalha</h3>
          <div className='container-imagens'>
            <div>
              <img src={toalhaVerde} />
              <p>Obrigatório</p>
            </div>
            <div>
              <img src={toalhaCinza} />
              <p>Recomendado</p>
            </div>
          </div>
        </div>

        <div className='legenda-elementos'>
          <h3>Bebedouro</h3>
          <div className='container-imagens'>
            <div>
              <img src={garrafaAmarela} />
              <p>Parcial</p>
            </div>
            <div>
              <img src={garrafaVermelha} />
              <p>Proibido</p>
            </div>
          </div>
        </div>

        <div className='legenda-elementos'>
          <h3>Vestiários</h3>
          <div className='container-imagens'>
            <div>
              <img src={cabideVerde} />
              <p>Liberado</p>
            </div>
            <div>
              <img src={cabideAmarelo} />
              <p>Parcial</p>
            </div>
            <div>
              <img src={cabideVermelho} />
              <p>Fechado</p>
            </div>
          </div>
        </div>

        <div className='legenda-elementos'>
          <h3>Vestiários</h3>
          <div className='container-imagens'>
            <div>
              <img src={cabideVerde} />
              <p>Liberado</p>
            </div>
            <div>
              <img src={cabideAmarelo} />
              <p>Parcial</p>
            </div>
            <div>
              <img src={cabideVermelho} />
              <p>Fechado</p>
            </div>
          </div>
        </div>

        <div className='legenda-elementos'>
          <h3>Vestiários</h3>
          <div className='container-imagens'>
            <div>
              <img src={cabideVerde} />
              <p>Liberado</p>
            </div>
            <div>
              <img src={cabideAmarelo} />
              <p>Parcial</p>
            </div>
            <div>
              <img src={cabideVermelho} />
              <p>Fechado</p>
            </div>
          </div>
        </div>

        <div className='legenda-elementos'>
          <h3>Vestiários</h3>
          <div className='container-imagens'>
            <div>
              <img src={cabideVerde} />
              <p>Liberado</p>
            </div>
            <div>
              <img src={cabideAmarelo} />
              <p>Parcial</p>
            </div>
            <div>
              <img src={cabideVermelho} />
              <p>Fechado</p>
            </div>
          </div>
        </div>

        <div className='legenda-elementos'>
          <h3>Vestiários</h3>
          <div className='container-imagens'>
            <div>
              <img src={cabideVerde} />
              <p>Liberado</p>
            </div>
            <div>
              <img src={cabideAmarelo} />
              <p>Parcial</p>
            </div>
            <div>
              <img src={cabideVermelho} />
              <p>Fechado</p>
            </div>
          </div>
        </div>

        <div className='legenda-elementos'>
          <h3>Vestiários</h3>
          <div className='container-imagens'>
            <div>
              <img src={cabideVerde} />
              <p>Liberado</p>
            </div>
            <div>
              <img src={cabideAmarelo} />
              <p>Parcial</p>
            </div>
            <div>
              <img src={cabideVermelho} />
              <p>Fechado</p>
            </div>
          </div>
        </div>
      </div>
    </DivLegenda>
  );
}

export default Legenda;