import styles from '../../styles/layout.module.css'

import Carrossel from '../Arranjos/Carrossel';
import Comidas from '../Arranjos/Comidas'

const Corpo = ({conteudo}) => {
    return (
      <div className={styles.corpo}>
        <Carrossel conteudo={conteudo} />
        <Comidas/>
      </div>
    );
  };
  
  export default Corpo;
  
