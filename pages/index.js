import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo ao Champineum!
        </h1>
        <p className={styles.description}>
          Uma disputa de amigos no Cartola FC
        </p>
        <div className={styles.grid}>
          <Link href="/ranking">
            <a className={styles.card}>Encontre como está a tabela do campeonato.</a>
          </Link>
          <Link href="/rodada" >
            <a className={styles.card}>Confira como estão os duelos da última rodada!</a>
          </Link>
        </div>
      </main>
    </div>
  )
}
