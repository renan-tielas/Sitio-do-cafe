import styles from '../../styles/arranjos.module.css'

import Botao_rod from '../Componentes/Botao_rod';
// import Button from '@material-ui/core/Button';

const NavegacaoRodape = () => {
    return (
      
      <div className={styles.navegacao_rod}>
       <Botao_rod texto='Facebook'/>
       <Botao_rod texto='Instagram'/>
       <Botao_rod texto='Entregas por terceiros'/>
       <Botao_rod texto='Trip Advisor'/>
       
       {/* <Botao_rod texto='Contatos'/> */}
      </div>
    );
  };
  
  export default NavegacaoRodape;
  
