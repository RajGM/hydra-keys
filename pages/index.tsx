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
          <div className="w-1/2 flex flex-col justify-center">
            <h1 className="font-bold text-xl text-[#3F3D56] dark:text-[#E4E4E4]">
              What is Hydra ?
            </h1>
            <p className="font-normal text-xl text-[rgb(0,0,0)] dark:text-[#F9F8F8]">
              Hydra is a wallet of wallets. It enables extremely large
              membership sets that can take part in fund distribution from a
              central wallet. It works with SOL and any SPL token.
            </p>
          </div>
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
