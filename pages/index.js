import Home from "./Home";


export async function getServerSideProps() {
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

export default Home