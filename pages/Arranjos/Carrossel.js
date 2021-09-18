import styles from '../../styles/arranjos.module.css'

import Cartao from '../Componentes/Cartao';
import Divisoria from '../Componentes/Divisoria'

const Carrossel = ({conteudo,funcao}) => {
    return (
      <div className={styles.carrossel}>
       <Cartao texto='CARDÁPIO' funcao={funcao} palavra='cardapio'  posicao={0} conteudo={conteudo}/>
       {/* <Divisoria/> */}
       <Cartao texto='ENTREGA' funcao={funcao} palavra='entregas' posicao={1} conteudo={conteudo}/>
       {/* <Divisoria/> */}
       {/* <Cartao texto='Realidades' posicao={2} conteudo={conteudo}/> */}
     
      </div>
    );
  };
  
  export default Carrossel;
  
