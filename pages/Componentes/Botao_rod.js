import styles from '../../styles/componentes.module.css'

// import Navegacao from './layout/Navegacao';


const Botao_rod = ({texto}) => {
    return (
      <button className={styles.botao_rod}>
       {/* <div className={styles.botao_titulo_sobe}> */}
         {texto}
         {/* </div> */}
      </button>
    );
  };
  
  export default Botao_rod;
  
