import Link from 'next/link'
import styles from '../styles/Home.module.css'
import axios from 'axios'

function Rodada({res}) {

  let rodadas = [];
  if(res.partidas != null) {
    for (let i = 0; i < res.partidas.length; i++) {
      let mandante = res.clubes[res.partidas[i].clube_casa_id].nome;
      let visitante = res.clubes[res.partidas[i].clube_visitante_id].nome
      rodadas.push(<li>{mandante}  x  {visitante} </li>)
    }
  }

  return (
    <>
      <h1>Rodada</h1>
      <h1>
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </h1>
      <div>
        <h2>Rodadas do campeonato</h2>
        <ul>{rodadas}</ul>
      </div>
    </>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts
  //const ret = await fetch(process.env.URL_ENDPOINT +  '/api/partidas')
  //const res = await ret.json()
  console.log(process.env.URL_ENDPOINT);
  const ret = await axios.get(process.env.URL_ENDPOINT +  '/api/partidas')
  const res = await ret.data
  //const res = []
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      res,
    },
  }
}

export default Rodada;