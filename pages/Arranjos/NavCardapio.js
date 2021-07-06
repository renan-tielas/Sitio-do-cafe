import styles from '../../styles/arranjos.module.css'

import Botao_PaginaCardapio from '../Componentes/Botao_PaginaCardapio';
// import Button from '@material-ui/core/Button';

const NavCardapio = ({funcao}) => {


  const textos_botoes = ["Carnes","Guarnições","Saladas","Bebidas e Sobremesa","Bebidas Alcoólicas","Pratos Executivos","Pratos para 2 e 3"]

    return (
   
<nav className={styles.navcardapio}>
{/* Cardapio */}


{textos_botoes.map((texto,i) => {
  return <Botao_PaginaCardapio texto={texto} funcao={()=>funcao(i)}/>;
})}


{/* <Botao_PaginaCardapio texto="" rota="#pag1" funcao={funcao}  />
<Botao_PaginaCardapio texto="Vegetais"  rota="#pag2" funcao={funcao}  />
<Botao_PaginaCardapio texto="Guarnições"   funcao={funcao} rota="#pag3"/>
<Botao_PaginaCardapio texto="Saladas"  funcao={funcao} rota="#pag4"/>
<Botao_PaginaCardapio texto="Bebidas"  funcao={funcao}rota="#pag5"/>
<Botao_PaginaCardapio texto="Sobremesa"  funcao={funcao}rota="/"/>
<Botao_PaginaCardapio texto="Bebidas Alcoólicas"  funcao={funcao}rota="/"/>
<Botao_PaginaCardapio texto="Pratos Executivos"  funcao={funcao}rota="/"/>
<Botao_PaginaCardapio texto="Pratos para 2 e 3"  funcao={funcao}rota="/"/> */}

<div class="scrollbar" id="style-4">
      <div class="force-overflow"></div>
    </div>

</nav>
    );
  };
  
  export default NavCardapio;
  
