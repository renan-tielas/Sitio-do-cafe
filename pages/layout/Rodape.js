import styles from '../../styles/layout.module.css'
import Botao_rod from '../Componentes/Botao_rod';
import Navegacao_rod from '../Arranjos/Navegacao_rod';
import Image from 'next/dist/client/image';
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


        <Image className={styles.img_rodape }
      src='/fachada.jpg'
      alt="descrição"
      // width='auto'
      height='300px'
      width='auto'
      // maxWidth={300}
     
      // objectPosition='10% 70%'
      />
        
        
Quick Galetos
        </div>
        <br/>
      </footer>
    );
  };
  
  export default Rodape;
  
