import styles from '../../styles/arranjos.module.css'

import Botao_pag from '../Componentes/Botao_pag';
// import Button from '@material-ui/core/Button';

const Navegacao = ({mudaRenderiza}) => {



    return (
   
<nav className={styles.navegacao}>
{/* Cardapio */}
{/* {console.log(mudaRenderiza)} */}
<Botao_pag texto="História"  funcao={mudaRenderiza} rota="/" pagina="historia" palavra='cardapio'/>
<Botao_pag texto="Cardápio"  funcao={mudaRenderiza} palavra='cardapio' />
{/* <Botao_pag texto="Monte seu Pedido"  funcao={mudaRenderiza} rota="/pedido"palavra='cardapio'/> */}
<Botao_pag texto="Entregas"  funcao={mudaRenderiza} rota="/"palavra='entregas'/>
<Botao_pag texto="Local"  funcao={mudaRenderiza}rota="/"palavra='cardapio'/>
<Botao_pag texto="Horários"  funcao={mudaRenderiza}rota="/"palavra='cardapio'/>
<Botao_pag texto="Fotos e Depoimentos"  funcao={mudaRenderiza}rota="/"palavra='cardapio'/>
{/* colocar visao 3d do google ou uma panoramica e o maps ao lado */}
<Botao_pag texto="Contato"  funcao={mudaRenderiza} rota="/"palavra='cardapio'/>
</nav>
    );
  };
  
  export default Navegacao;
  
