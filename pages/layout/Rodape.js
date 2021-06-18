import styles from '../../styles/layout.module.css'
import Botao_rod from '../Componentes/Botao_rod';
import Navegacao_rod from '../Arranjos/Navegacao_rod';
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
          
         
        </a>
        
Quick Galetos
        </div>
        <br/>
      </footer>
    );
  };
  
  export default Rodape;
  
