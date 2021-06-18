import styles from '../../styles/arranjos.module.css'

import Botao_pag from '../Componentes/Botao_pag';
// import Button from '@material-ui/core/Button';

const Navegacao = () => {
    return (
   
<nav className={styles.navegacao}>

{/* <Botao_pag texto="Início" rota="/" /> */}
<Botao_pag texto="História" rota="/"/>
<Botao_pag texto="Cardápio" rota="/cardapio" />
<Botao_pag texto="Monte seu Pedido" rota="/pedido"/>
<Botao_pag texto="Entregas" rota="/"/>
<Botao_pag texto="Local" rota="/"/>
{/* colocar visao 3d do google ou uma panoramica e o maps ao lado */}
<Botao_pag texto="Contato" rota="/"/>
</nav>
    );
  };
  
  export default Navegacao;
  
