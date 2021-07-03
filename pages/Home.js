import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import styles from '../styles/layout.module.css'
import Link from 'next/link'

// import Explicacao from './Componentes/Explicacao';

import Cabecalho from './layout/Cabecalho';
import IMGFundo from './layout/IMGFundo';

import Rodape from './layout/Rodape';
import Carrossel from './Arranjos/Carrossel';
import Comidas from './Arranjos/Comidas';

import { useState } from 'react';
import Cardapio from './Cardapio';
import Botao_ref from './Componentes/Botao_ref';
import {useRef} from 'react'



export default function Home({ conteudo }) {

let posicaoElemento = useRef('nulo')

  const [renderiza, setRenderiza] = useState('inicio')
  // renderizaDimensao = 


  const posiciona =() => {
    posicaoElemento.current.scrollIntoView()    
    console.log(posicaoElemento)
  }

  function mudaRenderiza (pagina)  {
        
        // if (renderiza == 'inicio') {
              setRenderiza(pagina)  
              console.log('função liga',pagina)
        // } else {
        //    setRenderiza('inicio')
        // console.log('função  desliga') }
        
  }


  // console.log(conteudo);

  if (renderiza=='inicio') {
    return (
      <div className={styles.estrutura}>
        <Head>
          <title>Quick Galetos</title>
          {/* <meta name="Sítio do café" content="Generated by create next app" /> */}
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
  
  
        <Cabecalho id='foo'funcao={mudaRenderiza}/>
  
        <div  ref={posicaoElemento} className={styles.corpo}>
          <Carrossel   conteudo={conteudo} />
          <input type="text"/>
          <Comidas/>
        
        {/* <div className={styles.div_espaço}></div> */}
  
  
        {/* <Link href="#foo" passHref> */}
  <button   className={styles.botao} onClick={posiciona}  >
    
CLICA

  </button>

  </div>

{/* </Link> */}
        <IMGFundo />
        <Rodape />
  
  
      </div>
    )
  }
  if (renderiza=='cardapio') {
    // return   <div>dasdasd</div>
    
    return  <Cardapio conteudo={conteudo} mudaRenderiza={mudaRenderiza}>fsdfsd</Cardapio>
  }


}
