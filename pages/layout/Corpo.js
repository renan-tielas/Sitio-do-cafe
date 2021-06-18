import styles from '../../styles/layout.module.css'

import Carrossel from '../Componentes/Carrossel';
import Texto from '../Componentes/Texto'

const Corpo = ({conteudo}) => {
    return (
      <div className={styles.corpo}>
        <Carrossel conteudo={conteudo} />
        <Texto conteudo={conteudo}/>
      </div>
    );
  };
  
  export default Corpo;
  
