import styles from '../../styles/componentes.module.css'
import Link from 'next/link'
// import Navegacao from './layout/Navegacao';


const Botao_rod = ({texto,endereco}) => {
  // let endereco='/'
  // switch (texto) {
  //   case (texto=='Facebook'):{
  //    endereco='www.facebook.com/quickgaletos';
  //    console.log('CLICKEKEKEK')
  //   }
      
  //     break;
  
  //   default:
  //     break;
  // }

    return (
     
      <button className={styles.botao_rod}>
          <Link href={endereco} className="botao">
          {texto}
      </Link>
       {/* <div className={styles.botao_titulo_sobe}> */}
         
         {/* </div> */}
      </button>
    );
  };
  
  export default Botao_rod;
  
