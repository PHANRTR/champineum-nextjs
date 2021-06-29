import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
