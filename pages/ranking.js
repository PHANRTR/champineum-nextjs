import Link from 'next/link'
import styles from '../styles/Home.module.css'

function Ranking( { res }) {
    return (
      <>
        <h1>Ranking</h1>
        <h2>
          <Link href="/">
            <a>Inicio</a>
          </Link>
        </h2>

        <div>res.</div>
      </>
    )
  }
  

// This function gets called at build time
export async function getStaticProps() {
    // Call an external API endpoint to get posts
    //const ret = await fetch('http://localhost:3000/api/partidas')
   //const res = await ret.json()
     const res = 1;
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        res,
      },
    }
  }
  
export default Ranking;