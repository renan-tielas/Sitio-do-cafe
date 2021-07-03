import styles from '../../styles/arranjos.module.css'

import Botao_PaginaCardapio from '../Componentes/Botao_PaginaCardapio';
// import Button from '@material-ui/core/Button';

const NavCardapio = ({funcao,referencia}) => {



    return (
   
<nav className={styles.navcardapio}>
{/* Cardapio */}

<Botao_PaginaCardapio texto="Carnes" referencia={referencia} rota="#pag1" funcao={funcao}  pagina='1'/>
<Botao_PaginaCardapio texto="Vegetais" referencia={referencia} rota="#pag2" funcao={funcao} pagina='2' />
<Botao_PaginaCardapio texto="Guarnições"  referencia={referencia} funcao={funcao} rota="#pag3"pagina='3'/>
<Botao_PaginaCardapio texto="Saladas"  funcao={funcao} rota="#pag4"pagina='4'/>
<Botao_PaginaCardapio texto="Bebidas"  funcao={funcao}rota="#pag5"pagina='5'/>
<Botao_PaginaCardapio texto="Sobremesa"  funcao={funcao}rota="/"pagina='6'/>
<Botao_PaginaCardapio texto="Bebidas Alcoólicas"  funcao={funcao}rota="/"pagina='7'/>
<Botao_PaginaCardapio texto="Pratos Executivos"  funcao={funcao}rota="/"pagina='8'/>
<Botao_PaginaCardapio texto="Pratos para 2 e 3"  funcao={funcao}rota="/"pagina='9'/>

<div class="scrollbar" id="style-4">
      <div class="force-overflow"></div>
    </div>

</nav>
    );
  };
  
  export default NavCardapio;
  
