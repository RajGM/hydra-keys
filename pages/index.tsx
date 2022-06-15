import type { NextPage } from 'next'
import Head from 'next/head'
import HomeBannerSvg from '../assets/svg/homeBanner'
import styles from './../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-hidden py-5 ">
        <div className="flex w-full h-screen max-h-[85vh]">
          <div className="w-1/2">02</div>
          <div className="w-1/2 flex justify-end items-center">
            <HomeBannerSvg
              className={styles.homeBannerSvg}
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
