import styles from '../../styles/componentes.module.css'

import Cartao from './Cartao';
import Divisoria from './Divisoria'

const Carrossel = ({conteudo}) => {
    return (
      <div className={styles.carrossel}>
       <Cartao texto='Ações' posicao={0} conteudo={conteudo}/>
       {/* <Divisoria/> */}
       <Cartao texto='Doações' posicao={1} conteudo={conteudo}/>
       {/* <Divisoria/> */}
       <Cartao texto='Realidades' posicao={2} conteudo={conteudo}/>
     
      </div>
    );
  };
  
  export default Carrossel;
  
