import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Rodada({res}) {

  let rodadas = [];
  for (let i = 0; i < res.partidas.length; i++) {
    let mandante = res.clubes[res.partidas[i].clube_casa_id].nome;
    let visitante = res.clubes[res.partidas[i].clube_visitante_id].nome
    rodadas.push(<li>{mandante}  x  {visitante} </li>)
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
  const ret = await fetch('http://localhost:3000/api/partidas')
  const res = await ret.json()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      res,
    },
  }
}

export default Rodada;