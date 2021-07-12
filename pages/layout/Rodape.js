import styles from '../../styles/layout.module.css'
import Botao_rod from '../Componentes/Botao_rod';
import Navegacao_rod from '../Arranjos/Navegacao_rod';
import Image from 'next/dist/client/image';
import Texto from '../Arranjos/Texto';
// import Navegacao from './layout/Navegacao';


const Rodape = () => {
    return (
      
      <footer className={styles.rodape}>
  

      <Image className={styles.img_rodape}
      src='/fachada.jpg'
      alt="descrição"
    
      height='auto'
      width='100px'
      maxWidth='100px'
      // objectPosition='10% 70%'
      />

      <Texto/>
      <Navegacao_rod/>
        
{/* Quick Galetos */}


      </footer>
    );
  };
  
  export default Rodape;
  
