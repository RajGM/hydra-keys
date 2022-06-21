import type { NextPage } from 'next'
import Head from 'next/head'
import HomeCarousel from '../components/HomeCarousel'
import HeroSection from '../components/HeroSection'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Hydra Wallet</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSection />
      <HomeCarousel />
    </div>
  )
}

export default Home
