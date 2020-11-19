import styles from '../styles/Home.module.scss'
import Head from 'next/head'

export default function Home() {
  return (
      <>
          <Head>
              <title>ResteRosa</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
        <div className={styles.container}>
          <h1>ResteRosa</h1>
        </div>
      </>
  )
}
