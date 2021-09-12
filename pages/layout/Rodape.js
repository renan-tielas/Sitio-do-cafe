import styles from '../../styles/layout.module.css'

import Divisoria from '../Componentes/Divisoria';
import NavegacaoRodape from '../Arranjos/NavegacaoRodape';
import Image from 'next/dist/client/image';
import TextoRodape from '../Componentes/TextoRodape';
// import Navegacao from './layout/Navegacao';


import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


const Rodape = () => {
    
  // VERSAO CELULAR
      if (isMobile) {
        return ( 
        <footer className={styles.rodape}>
          
          {/* {console.log('MOBIKLEEEE')} */}
          <div className={styles.img_rodape}>
          <Image  
          src='/fachada.jpg'
          alt="descrição" 
          // height='auto'
         
          // maxWidth='100px'
          // margin={200}
     
          objectFit='cover'
          // height='400px'
          // layout= "responsive"
          
          height={320*0.95}
          width={350*0.95}
          // minWidth='100px'
          // maxWidth={100}
         
          objectPosition='90% 68%'
          /> 
          </div>
          
          <TextoRodape/>
          {/* <Divisoria/>   */}
      
            <NavegacaoRodape/>
            
        {/* Quick Galetos */}
        
        
          </footer>
        )
    }

    // VERSÃO BROWSER
    return ( 
      <footer className={styles.rodape}>
  
      {/* <div className={styles.img_rodape}></div> */}
      <div className={styles.img_rodape}>
      <Image  
      src='/fachada.jpg'
      alt="descrição" 
      // height='auto'
     
      // maxWidth='100px'
      // margin={200}
      objectFit='cover'
      // height='400px'
      // layout= "responsive"
      
      height={320*0.95}
      width={600*0.95}
      // minWidth='100px'
      // maxWidth='100px'
     
      objectPosition='90% 68%'
      /> 
      </div>
      
      <TextoRodape/>
    
        <NavegacaoRodape/>
        
{/* Quick Galetos */}


      </footer>



    );
  };
  
  export default Rodape;
  
