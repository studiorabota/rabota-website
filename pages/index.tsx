import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Studio Rabota | Code, education, prototyping and artistic-scientific experimentation</title>
        <meta name="description" content="Rabota is a studio specialized in code, rapid-prototyping and artistic-scientific experimentation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.intro}>Rabota | Code, prototyping, electronics and artistic-scientific experimentation 🦠</h1>
        <nav className={styles.nav}>
          <ul>
            <li><a href='#'>Wiggle Bin<span>Prototype</span></a></li>
            <li><a href='#'>Compost Bin <span>Electronics</span></a></li>
            <li><a href='#'>Sensing Water <span>Data</span></a></li>
            <li><a href='#'>3d objects <span>Electronics</span></a></li>
            <li><a href='#'>Weather sensor <span>Data</span></a></li>
          </ul>
        </nav>
      </main>
    </>
  )
}
