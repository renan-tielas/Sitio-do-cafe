


import Cardapio from "./Cardapio";

export async function getStaticProps() {
    const dadosDaAPI = await fetch('http://localhost:3000/api/hello')
    .then((res) =>{
        if(res.ok){
            return res.json();
        }
    })
    .then((res)=>{
        return res
    })

    return {
        props:{
            conteudo:dadosDaAPI.conteudo
        }
    }
}

export default Cardapio 


  export default Cardapio;