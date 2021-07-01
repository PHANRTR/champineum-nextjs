import Link from 'next/link'
import cardStyle from '../styles/Rodada.module.css'
import axios from 'axios'
import Head from 'next/head';
import Image from 'next/image';

function Rodada({res}) {

  let rodadas = [];
  if(res.partidas != null) {
    for (let i = 0; i < res.partidas.length; i++) {
      let mandante = res.clubes[res.partidas[i].clube_casa_id];
      let visitante = res.clubes[res.partidas[i].clube_visitante_id];
      
      rodadas.push(<li key={res.partidas[i].partida_id} className={cardStyle.card}>
                    <Image size='mini' src={mandante.escudos['45x45']} width='30' height='30' /> 
                    {mandante.nome}  x {visitante.nome} 
                    <Image size='mini' src={visitante.escudos['45x45']} width='30' height='30' /> 
                    </li>)
    }
  }

  return (
    <>
      <Head className={cardStyle.title}>Rodada</Head>
      <div className={cardStyle.header}>
      <h1 className={cardStyle.voltar}>
        <Link href="/">
          <a>Voltar</a>
        </Link>
      </h1>
      </div>
      <div>
        <h2>Últimos Resultados</h2>
        <ul>{rodadas}</ul>
      </div>
    </>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  console.log(process.env.URL_ENDPOINT);
  const ret = await axios.get(process.env.URL_ENDPOINT +  '/api/partidas')
  const res = await ret.data

  return {
    props: {
      res,
    },
  }
}

export default Rodada;