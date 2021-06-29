import styles from '../../styles/componentes.module.css'
import Image from 'next/image'
import Link from 'next/link'
// import Navegacao from './layout/Navegacao';


const Logo = ({mudaRenderiza}) => {
    return (
      <div className={styles.logo}onClick={() => mudaRenderiza('inicio')}>
        <Link href='/'>
       <Image 
      src='/logo-quick.png'
      alt="descrição"
      // width='auto'
      width='auto'
      // maxWidth={300}
      height={54}
      // objectPosition='100% 25%'
      
      />
      </Link>
      </div>
    );
  };
  
  export default Logo;
  
