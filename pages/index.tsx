import type { NextPage } from 'next'
import Head from 'next/head'
import HomeBannerSvg from '../assets/svg/homeBanner'
import ArrowSvg from '../assets/svg/arrow'
import styles from './../styles/Home.module.css'

const Home: NextPage = () => {
  return (

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="overflow-hidden py-5 ">
        <div className="flex w-full h-screen max-h-[85vh] relative">
          <div className="w-full xl:w-1/2 lg:w-7/12 md:w-9/12 sm:w-full flex flex-col justify-center p-10 sm:p-20">
            <h1 className="font-bold text-2xl sm:text-left text-[#3F3D56] dark:text-[#E4E4E4] mb-8">
              What is Hydra ?
            </h1>
            <p className="font-normal text-xl text-center sm:text-left text-[rgb(0,0,0)] dark:text-[#F9F8F8] mb-8 sm:pr-10">
              Hydra is a wallet of wallets. It enables extremely large
              membership sets that can take part in fund distribution from a
              central wallet. It works with SOL and any SPL token.
            </p>
            <div className="flex justify-start items-center gap-5 flex-col sm:flex-row">
              <button className="btn w-8/12 sm:w-fit btn-secondary px-6 text-lg font-normal">
                Keep Exploring{' '}
                <ArrowSvg width="17px" height="17px" fill="#fff" />
              </button>
              <button className="btn w-8/12	sm:w-fit btn-primary px-6 text-lg font-normal">
                Get Started{' '}
                <ArrowSvg
                  width="17px"
                  height="17px"
                  fill="#fff"
                  className={styles.heroButton}
                />
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-end items-center absolute top-1/2 right-0 -translate-y-1/2 -z-10">
            <HomeBannerSvg
              className={styles.homeBannerSvg}
              width="90%"
              height="90%"
            />
          </div>
        </div>
        //Models-Membership section
        <div className={styles.section3}>
          <div className="slider">
      <div className="circular-slider circular-slider-1">
        <div className="wrapper">
          <div className="controls">
            <div className="controls__left">
              <div className="icon-wrapper"><i className="far fa-arrow-alt-circle-left"></i></div>
            </div>
            <div className="controls__right">
              <div className="icon-wrapper"><i className="far fa-arrow-alt-circle-right"></i></div>
            </div>
            <div className="controls__autoplay controls__autoplay_running">
              <div className="icon-wrapper">
                <div className="pause"><i className="far fa-pause-circle"></i></div>
                <div className="run"><i className="far fa-play-circle"></i></div>
              </div>
            </div>
          </div>
          <div className="slides-holder">
            <div className="slides-holder__item slides-holder__item_active"><img src="img/NFT.png" alt="img"/></div>
            <div className="slides-holder__item"><img src="img/wallet.png" alt="img"/></div>
            <div className="slides-holder__item"><img src="img/grow.png" alt="img"/></div>
          </div>
          <div className="descriptions">
            <div className="descriptions__item descriptions__item_visible">
              <h1>NFT Membership</h1>
              <p className="description">Using NFTs, the membership is tied to an NFT mint address instead of static public address. Each NFT mint address can still have a different quantity of shares as in the Wallet model</p>
            </div>
            <div className="descriptions__item">
              <h1>Wallet Membership</h1>
              <p className="description"> One of the simplest membership model. It's just a list of each Member's public address and the number of shares they own.</p>
            </div>
            <div className="descriptions__item">
              <h1>Token Membership</h1>
              <p className="description"> The Token is the most flexible membership model, but is a bit more complicated. In this model, Membership is associated with staked ownership of the specified Token.</p>
            </div>
          </div>
        </div>
      </div>
      <script src ="/slider.js"></script>
    </div>
      </div>

  )
}

export default Home
