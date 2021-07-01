import Link from 'next/link'
import cardStyle from '../styles/Rodada.module.css'
import axios from 'axios'
import Head from 'next/head';
import Image from 'next/image';

function Rodada({rodada, clubes}) {

  let rodadas = [];
  if(rodada.partidas != null) {
    for (let i = 0; i < rodada.partidas.length; i++) {
      let mandante = rodada.clubes[rodada.partidas[i].clube_casa_id];
      let visitante = rodada.clubes[rodada.partidas[i].clube_visitante_id];
      
      let mandante_cartola = clubes.filter(clube => clube.represents_team == mandante.id);
      let visitante_cartola = clubes.filter(clube => clube.represents_team == visitante.id);

      let nome_mandante =  mandante_cartola.length > 0? mandante_cartola[0].nome : "";
      let nome_visitante = visitante_cartola.length > 0? visitante_cartola[0].nome : "";


      rodadas.push(<li key={rodada.partidas[i].partida_id} className={cardStyle.card}>
                      <Image size='mini' src={mandante.escudos['45x45']} width='30' height='30' /> 
                      {nome_mandante} x {nome_visitante}
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
  const ret = await axios.get(process.env.URL_ENDPOINT +  '/api/partidas')
  const rodada = await ret.data

  const res = await axios.get(process.env.URL_ENDPOINT +  '/api/clubes')
  const clubes = await res.data.result

  return {
    props: {
      rodada,
      clubes,
    },
  }
}

export default Rodada;