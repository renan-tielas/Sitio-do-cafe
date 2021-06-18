import styles from '../../styles/componentes.module.css'

import Botao_rod from './Botao_rod';
// import Button from '@material-ui/core/Button';

const Navegacao_rod = () => {
    return (
      <div className={styles.navegacao_rod}>
       <Botao_rod texto='Contatos'/>
       <Botao_rod texto='Sites de Referência'/>
       <Botao_rod texto='Galeria'/>
       <Botao_rod texto='Como nos apoiar'/>
       <Botao_rod texto='Mapa do Site'/>
      </div>
    );
  };
  
  export default Navegacao_rod;
  
