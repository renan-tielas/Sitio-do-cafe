import styles from '../../styles/layout.module.css'
import Botao_rod from '../Componentes/Botao_rod';
import Navegacao_rod from '../Arranjos/Navegacao_rod';
import Image from 'next/dist/client/image';
import Texto from '../Arranjos/Texto';
// import Navegacao from './layout/Navegacao';


const Rodape = () => {
    return (
      
      <footer className={styles.rodape}>
  
      {/* <div className={styles.img_rodape}></div> */}
      <div className={styles.img_rodape}>
      <Image  
      src='/fachada.jpg'
      alt="descrição" 
      height='auto'
      width='100px'
      maxWidth='100px'
      margin={200}
      objectFit='cover'
      // height='400px'
      // layout= "responsive"
      
      height={320*0.95}
      width={600*0.95}
      // maxWidth='100px'
     
      objectPosition='90% 68%'
      /> ""
      </div>
      <Texto/>
        <Navegacao_rod/>
        
{/* Quick Galetos */}


      </footer>
    );
  };
  
  export default Rodape;
  
