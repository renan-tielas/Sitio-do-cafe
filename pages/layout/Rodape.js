import styles from '../../styles/layout.module.css'
import Botao_rod from '../Componentes/Botao_rod';
import Navegacao_rod from '../Componentes/Navegacao_rod';
// import Navegacao from './layout/Navegacao';


const Rodape = () => {
    return (
      
      <footer className={styles.rodape}>


       
<Navegacao_rod/>
        
<div className='inline'>
        <a
          href="https://facebook.com/sitiodocafe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sitio do Café 
          --- face / insta / youtube / email etc
        </a>
        
        </div>
        <br/>
      </footer>
    );
  };
  
  export default Rodape;
  
