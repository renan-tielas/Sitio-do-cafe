import styles from '../../styles/arranjos.module.css'

import Cartao from '../Componentes/Cartao';
import Divisoria from '../Componentes/Divisoria'

const Carrossel = ({conteudo}) => {
    return (
      <div className={styles.carrossel}>
       <Cartao texto='CARDÁPIO' posicao={0} conteudo={conteudo}/>
       {/* <Divisoria/> */}
       <Cartao texto='ENTREGA' posicao={1} conteudo={conteudo}/>
       {/* <Divisoria/> */}
       {/* <Cartao texto='Realidades' posicao={2} conteudo={conteudo}/> */}
     
      </div>
    );
  };
  
  export default Carrossel;
  
