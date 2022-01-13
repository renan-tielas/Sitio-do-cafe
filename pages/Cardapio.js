// import styles from '../styles/Home.module.css'
import styles from '../styles/layout.module.css'
import Head from 'next/head'



import Cabecalho_Cardapio from './layout/Cabecalho_Cardapio';

import PaginaCardapio from './Arranjos/PaginaCardapio';
import NavCardapio from './Arranjos/NavCardapio';
import Rodape from './layout/Rodape';
import { useRef } from 'react';
import { useState } from 'react';
export default function Cardapio({ mudaRenderiza }) {



// comidas_nome[i]=conteudo[i].comida_nome
// comidas_descricao[i]=conteudo[i].comida_descricao
// comidas_preco[i]=conteudo[i].comida_preco
// comidas_preco_grande[i]=conteudo[i].comida_preco_grande
// comidas_foto[i]=conteudo[i].comida_foto
// categorias[i]=conteudo[i].categoria

const categoria = [
  'Carnes',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'Vegetais',
'',
'',
'',
'Guarnições',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'Saladas',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'Pão',
'',
'',
'__',
'',
'Bebidas',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'Sobremesa',
'',
'Cervejas',
'',
'',
'',
'',
'',
'Vinhos',
'',
'',
'',
'Cachaça',
'',
'Pratos Executivos',
'',
'',
'',
'',
'Trocas',
'',
'',
'',
'',
'',
'',
'',
'',
'Pratos para 2 pessoas',
'',
'',
'',
'',
'',
'Pratos para 3 pessoas',
'',
'',
]
const comida_nome=[
  '',
  'Galeto',
  'Filet Mignon',
  'Filet Mignon Quick Galetos',
  'Contra Filet',
  'Churrasqueto',
  'Churrasco Misto',
  'Peixe na Brasa',
  'Camarão',
  'Lombo de Porco',
  'Linguiças', 
  '',
  'Espeto de Legumes na Brasa',
  'Legumes Cozidos',
  'Caldo Verde',
  '',
  'Arroz Branco',
  'Arroz à Grega',
  'Arroz com Brócolis',
  'Batata Frita',
  'Batata Cozida',
  'Aipim Frito',
  'Aipim com Carne Seca',
  'Farofa de Ovos',
  'Farofa de Ovos e Banana',
  'Farofa à Brasileira',
  'Feijão',
  'Ovos fritos',
  'Espetinho de Pimentão e Cebola',
  '',
  'Salada de Maionese',
  'Salada de Palmito',
  'Salada Mista',
  'Salada Espanhola',
  'Salada de Abacate',
  'Salada de Palmito e Abacate',
  'Salada Simples (1 item)',
  'Item extra, para adicionar às saladas:',
  'Molheira de Tomate e Cebola',
  '',
  'Pãozinho Francês',
  'Pão com Alho',
  '',
  'Embalagem',
  ' ',
  'Suco de Laranja',
  'Suco Del Valle',
  'Suco Aurora',
  'Refrigerantes',
  '',
  'H2OH!',
  'Matte',
  'Iced Tea',
  'Água Mineral',
  '',
  'Pudim da casa',
  '',
  'Long Neck 355ml: ',
  'Garrafa 600ml: Brahma Duplo Malte, Bohemia',
  'Garrafa 600ml: Stella (550ml), Original, Serramalte',
  'Garrafa 600ml: Heineken',
  'Garrafa 600ml: Colorado Ribeirão',
  '',
  'Taça de vinho',
  'Vinho – Miolo (375ml Garrafa)',
  'Vinho – Santa Carolina (375ml Garrafa)',
  '',
  'Boazinha',
  'Os pratos executivos são servidos com 3 acompanhamentos, escolha entre: arroz branco, feijão, batata frita ou farofa.',
  'Meio Galeto',
  'Espeto Vegetariano',
  'Duas Linguiças',
  'Meio Churrasqueto',
  'Para troca de um acompanhamento do prato executivo, seguem as opções abaixo:',
  'Troca por Molho Vinagrete',
  'Troca por Batata Portuguesa',
  'Troca por Arroz à Grega, Arroz com Brócolis',
  'Troca por Farofa de Ovos',
  'Troca por Farofa de Ovos e Banana',
  'Troca por Farofa à Brasileira',
  'Troca por Salada de Maionese',
  'Troca por pequena Salada de dois itens, entre: ',
  '',
  'Acompanhamentos com arroz, feijão e batatas fritas ou arroz, feijão e farofa de ovos. Para trocar o arroz branco por Arroz com Brócolis, ou Arroz à Grega, acrescentar R$ 4,00. Para trocar a farofa de ovos por:  Farofa de Ovos e Banana acrescentar R$ 1,00. Farofa à Brasileira, acrescentar R$ 4,00',
  'Galeto',
  'Churrasqueto',
  'Lombo de Porco',
  'Filet Mignon',
  'Filet Mignon Quick Galetos',
  'Acompanhamentos com arroz, feijão e batatas fritas ou arroz, feijão e farofa de ovos. Para trocar o arroz branco por Arroz com Brócolis, ou Arroz à Grega, acrescentar R$ 8,00. Para trocar a farofa de ovos por:  <br/>  Farofa de Ovos e Banana acrescentar R$ 2,00. Farofa à Brasileira, acrescentar R$ 6,00.',
  'Contra Filet',
  'Churrasco Misto'
]
  
const comida_descricao=[
  '',
  'Galeto na brasa com o delicioso tempero “Quick Galetos”',
  'Churrasco de filet mignon.',
   'Brochetes de filet mignon intercalados com fatias de tomate, cebola e Pimentão.',
  'Churrasco de contra filet.',
  'Brochetes de contra filet intercalados com fatias de bacon, pimentão e cebola.',
  'Churrasco de contra filet, lombo de porco e linguiça no espeto com pimentão e cebola.',
  'Peixe grelhado na brasa.',
  'Porção de camarões grelhados na brasa.',
  'Churrasco de lombo de porco.',
  'Três unidades de linguiça suína.',
  '',
  'Escolha 4 entre: Abobrinha, Berinjela, Cebola, Pimentão, Tomate e Beterraba. Assados na brasa com o tempero “Quick Galetos"',
  'Cenoura, Abobrinha, Vagem e Batata Doce',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'Farinha de mandioca e ovos, com salsinha e alho.',
  'Com farinha de mandioca, ovos e banana.',
  'Com farinha de mandioca, azeitona, ovos e linguiça.',
  '',
  '',
  '',
  '',
  '',
  '',
  'Combinação de salada de maionese, com palmito, alface, cebola, pimentão, ovos cozidos, ervilha, pepino, tomate, cenoura e beterraba.',
  'Combinação de palmito, abacate, cebola e tomate.',
  '',
  '',
  'Escolha uma das opções: Alface, Beterraba, Cebola, Cenoura, Pepino, Tomate',
  'Alface, Beterraba, Cebola, Cenoura, Pepino, Tomate',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'Coca-cola, Guaraná, Água Tônica, Soda Limonada - KS ou lata ',
  'Coca-cola e Guaraná - 600ml',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'Heineken, Stella, Bohemia, Budweiser, Original, Cacilds, Brahma Duplo Malte, Itaipava Premium, Malzbier.',
  '',
  '',
  '',
  '',
  '',
  'Vinho da casa – Tinto ou Branco',
  'Tinto ou Branco',
  'Tinto ou Branco',
  '',
  '',
  '',
  'Meio Galeto na brasa com o tempero “Quick Galetos”. Especialidade da casa, servido com os acompanhamentos de sua escolha.',
  'Espeto de vegetais assados na brasa com o tempero “Quick Galetos”. <br/>Escolha 4 opções entre: Abobrinha, Berinjela, Cebola, Pimentão, Tomate e Beterraba. Servido com os acompanhamentos de sua escolha.',
  'Duas linguiças assadas na brasa servidas com os acompanhamentos de sua escolha.',
  'Brochetes de contra filet intercalados com fatias de bacon, pimentão e cebola, servidas com os acompanhamentos de sua escolha.',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  'Alface, Tomate, Cebola, Cenoura, Beterraba',
  '',
  'Galeto na brasa, com arroz, batatas fritas e feijão.',
  'Brochetes de contra filet intercalados com fatias de bacon, pimentão e cebola. Acompanha meio arroz, meias batatas fritas e feijão.',
  'Churrasco de lombo de porco. Acompanha meio arroz, meias batatas fritas e feijão.',
  'Churrasco de filet mignon. Acompanha meio arroz, meias batatas fritas e feijão.',
  'Brochetes de filet mignon intercalados com fatias de tomate, cebola e Pimentão. Acompanha meio arroz, meias batatas fritas e feijão.',
  '',
  'Churrasco de contra filet. Acompanha arroz branco, batatas fritas e feijão.',
  'Churrasco de contra filet, lombo de porco e linguiça no espeto com pimentão e cebola. Acompanha arroz branco, batatas fritas e feijão.',
]

const comida_preco=[
'', 
'25,80',
'80,80',
'86,60',
'59,60',
'39,60',
'84,80',
'84,00',
'95,20',
'45,00',
'15,30',
'', 
'14,00',
'11,40',
'17,00',
'', 
'8,00',
'12,00',
'12,00',
'11,40',
'9,40',
'11,00',
'45,00',
'9,00',
'10,00',
'12,60',
'4,50',
'7,60',
'14,60',
'', 
'22,80',
'32,80',
'49,80',
'41,60',
'18,60',
'38,90',
'5,80',
'2,20',
'5,80',
'', 
'1,10',
'5,00',
'', 
'1,70',
'', 
'9,80',
'6,80',
'9,80',
'5,80',
'8,00',
'6,80',
'5,80',
'6,20',
'4,60',
'', 
'11,20',
'', 
'9,00',
'12,00',
'13,00',
'15,00',
'16,50',
'', 
'14,30',
'45,80',
'32,80',
'', 
'10,00',
'', 
'28,00',
'25,00',
'25,00',
'35,00',
'', 
'1,50',
'2,00',
'3,00',
'3,00',
'3,00',
'5,00',
'4,00',
'4,00',
'', 
'53,80',
'67,60',
'73,00',
'108,80',
'114,60',
'', 
'105,00',
'130,20',
]

const comida_preco_grande =[
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
'24,00',
'21,80',
'',
'',
'14,60',
'22,60',
'22,60',
'21,80',
'18,80',
'20,80',
'',
'16,60',
'18,60',
'22,60',
'9,00',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
]
const comida_foto = [
  '',
  '/galeto.jpg',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
  '',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
'',
]


const conteudo = [categoria,comida_nome,comida_descricao,comida_preco,comida_preco_grande,comida_foto]

  let posicaoElemento= [];





  for (let i = 0; i < 5; i++) {
    posicaoElemento[i]= useRef('nulo');
    
  }
 
 
  // const myRef2 = useRef(null)
  // const myRef3 = useRef(null)
  // const myRef4 = useRef(null)
  // const myRef = [useRef(null),useRef(null),useRef(null),useRef(null),]


  const [estaAtivo,setAtivo] = useState(null)
  const poeAtivo = (indice) =>{
      if (indice==indice){
          //  setInativo(indice)
          
      }
      setAtivo(indice)
      console.log('ativandooo')
  }



  const posiciona =(i) => {
    posicaoElemento[i].current.scrollIntoView({behavior:"smooth",display:'relative',top:'20%'})    
    // console.log(posicaoElemento)
  }


  // const posiciona2 =() => {
  //   // posicaoElemento2.current.scrollIntoView()    
  //   console.log(posicaoElemento2)
  // }

    return (

<body className={styles.estrutura}>
      <Head>
        <title>Quick Galetos</title>
        {/* <meta name="Sítio do café" content="Generated by create next app" /> */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, cardapio galeto opções pratos" />
      </Head>


      <Cabecalho_Cardapio funcao={mudaRenderiza}/>
    
      
      <div  className={styles.corpo_cardapio} >

      <NavCardapio  funcao={posiciona}/>
     {/* automatizar titulo! */}
      <PaginaCardapio  ref={posicaoElemento[0]} key={1} conteudo={conteudo}  pagina={1} posicao_a={1} posicao_b={11} titulo='Carnes' estaAtivo={estaAtivo} poeAtivo={poeAtivo} />
      <PaginaCardapio  ref={posicaoElemento[1]} key={2} conteudo={conteudo}  pagina={2} posicao_a={12} posicao_b={29} titulo='Vegetais' estaAtivo={estaAtivo} poeAtivo={poeAtivo} />
      <PaginaCardapio  ref={posicaoElemento[2]} key={3} conteudo={conteudo}  pagina={3} posicao_a={30} posicao_b={44} titulo='Saladas' estaAtivo={estaAtivo} poeAtivo={poeAtivo} />
      <PaginaCardapio  ref={posicaoElemento[3]} key={4} conteudo={conteudo}  pagina={4} posicao_a={45} posicao_b={56} titulo='Bebidas' estaAtivo={estaAtivo} poeAtivo={poeAtivo} />
      <PaginaCardapio  ref={posicaoElemento[4]} key={5} conteudo={conteudo}  pagina={5} posicao_a={57} posicao_b={68} titulo='Cervejas' estaAtivo={estaAtivo} poeAtivo={poeAtivo} />
      <PaginaCardapio  ref={posicaoElemento[5]} key={6} conteudo={conteudo}  pagina={6} posicao_a={69} posicao_b={82} titulo='Pratos Executivos' estaAtivo={estaAtivo} poeAtivo={poeAtivo} />
      <PaginaCardapio  ref={posicaoElemento[6]} key={7} conteudo={conteudo}  pagina={7} posicao_a={83} posicao_b={91} titulo='Pratos para 2 pessoas' estaAtivo={estaAtivo} poeAtivo={poeAtivo} />
      {/* <PaginaCardapio conteudo={conteudo} pagina={2}  /> */}
      </div>
        
      {/* <IMGFundo /> */}
      <Rodape />


    </body>



    //    {/* <Conteudo_Cardapio Cardapio={conteudo.Cardapio} posicao={0} /> */}

    );
  };
  
