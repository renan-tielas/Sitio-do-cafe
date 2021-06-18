import styles from '../../styles/componentes.module.css'
import Image from 'next/image'
// import Navegacao from './layout/Navegacao';


const Logo = () => {
    return (
      <div className={styles.logo}>
       <Image 
      src='/logo-quick.png'
      alt="descrição"
      // width='auto'
      width='auto'
      // maxWidth={300}
      height={54}
      // objectPosition='100% 25%'
      />
      </div>
    );
  };
  
  export default Logo;
  
