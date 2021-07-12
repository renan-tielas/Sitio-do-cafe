import styles from '../../styles/layout.module.css'

// import Navegacao from './layout/Navegacao';
import Logo from '../Componentes/Logo'
import Navegacao from '../Arranjos/Navegacao'
import Busca from '../Componentes/Busca'





const Cabecalho_Cardapio = ({funcao}) => {
    return (
      <div className={styles.cabecalho_cardapio}>
        {/* <div className={styles.inline}> */}
      <Logo  mudaRenderiza={funcao}/>
      
      <Navegacao mudaRenderiza={funcao} />
      {/* <Busca/> */}
      </div>
      // </div>
    );
  };
  
  export default Cabecalho_Cardapio;
  

  // const Cabecalho_Cardapio = () => {
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
  
  // export default Cabecalho_Cardapio;