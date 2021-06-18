import styles from '../../styles/layout.module.css'

// import Navegacao from './layout/Navegacao';
import Logo from '../Componentes/Logo'
import Navegacao from '../Componentes/Navegacao'
import Busca from '../Componentes/Busca'





const Cabecalho = () => {
    return (
      <div className={styles.cabecalho}>
        
      <Logo/>
      <Navegacao/>
      <Busca/>
      </div>
    );
  };
  
  export default Cabecalho;
  

  // const Cabecalho = () => {
  //   return (
  //     <div className="cabecalho">
  //       <div className="logo"></div>
  //       <div className="imagens-logo">
  //         {/* <span className="img-logo"></span>
  //         <span className="img-logo2"></span> */}
  //         <span className="img-logo3"></span>
  //         <span className="img-logo3"></span>
  //         <span className="img-logo3"></span>
  //       </div>
  //     </div>
  //   );
  // };
  
  // export default Cabecalho;