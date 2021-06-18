import styles from '../../styles/componentes.module.css'
import  { useState } from 'react';

import ItemComida from '../Componentes/ItemComida';

// import Conteudo_texto from './Conteudo_texto';
// import Divisoria from './Divisoria'

const Comidas = ({conteudo}) => {



    
  const [pagina_comidas, SetPagina] = useState(0);

  const paginaMais = () => {
    if (pagina_comidas < 1) {
      SetPagina((pagina_comidas) => pagina_comidas + 1);
    }
  };

  const paginaMenos = () => {
    if (pagina_comidas > 0) {
      SetPagina((pagina_comidas) => pagina_comidas - 1);
    }
  };

  const comidas = {
    id: [1, 2, 3, 4, 5, 6],

    nome: [
      ['Galeto', 'Porção de Linguiças'],
      ['Batata Frita', 'Batata Cozida'],
      ['Farofa de Ovos', 'Farofa à Brasileira'],
      ['Espeto Vegetariano',  'Espetinho de Pimentão e Cebola'],
      ['Legumes Cozidos', 'Feijão'],
      ['Arroz com Brócolis', 'Arroz à Grega'],
    ],


    arq: [
      ['galeto.jpg', 'linguiça.jpg' ],
      ['batata frita.jpg', 'batata cozida.png' ],
      ['farofa ovos.JPG', 'farofa brasileira.jpg'],
      ['espeto vegetariano.JPG', 'espetinho pimentao e cebola.png' ],
      ['legumes cozidos.JPG', 'feijao.jpg'],
      ['arroz com brocolis.JPG', 'arroz a grega.JPG' ],
    ],

    preco: [
      ['R$ 25,80', 'R$ 15,90'],
      ['R$ 20,80', 'R$ 18,80'],
      ['R$ 16,50', 'R$ 22,00'],
      ['R$ 18,00', 'R$ 14,50'],
      ['R$ 18,80', 'R$ 9,00'],
      ['R$ 22,50', 'R$ 22,50'],
    ],
  };

  return (

    'a'
/* <div className={styles.texto_grande}>
<div className={styles.titulo_texto_grande}>
Comidas
</div>



    <div className="postComidas">
      <div className="troca-pag">
        <button onClick={paginaMenos}>&#60;</button>
        <div className="titulo-comidas">&#160;&#160;Mais Pedidas &#160;</div>
        <button onClick={paginaMais}>&#62;</button>
      </div>

      <div className="comidas">
        <ItemComida
          nome={comidas.nome[0][pagina_comidas]}
          arq={comidas.arq[0][pagina_comidas]}
          preco={comidas.preco[0][pagina_comidas]}
        />
        <ItemComida
          nome={comidas.nome[1][pagina_comidas]}
          arq={comidas.arq[1][pagina_comidas]}
          preco={comidas.preco[1][pagina_comidas]}
        />
        <ItemComida
          nome={comidas.nome[2][pagina_comidas]}
          arq={comidas.arq[2][pagina_comidas]}
          preco={comidas.preco[2][pagina_comidas]}
        />
        <ItemComida
          nome={comidas.nome[3][pagina_comidas]}
          arq={comidas.arq[3][pagina_comidas]}
          preco={comidas.preco[3][pagina_comidas]}
        />
        <ItemComida
          nome={comidas.nome[4][pagina_comidas]}
          arq={comidas.arq[4][pagina_comidas]}
          preco={comidas.preco[4][pagina_comidas]}
        />
        <ItemComida
          nome={comidas.nome[5][pagina_comidas]}
          arq={comidas.arq[5][pagina_comidas]}
          preco={comidas.preco[5][pagina_comidas]}
        />
      </div>
    </div>
    </div> */
  // }
  );

  };
  
  export default Comidas;