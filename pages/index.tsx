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
          <h1 className="mb-16">Membership Models</h1>
          <img src="/NFT.png" className="NFT"></img>
          <div className="semi">
          <div className='carousel'>
        <div className='carousel-inner'>
        
        <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden checked></input>
        <div className="carousel-item">
        <h2>NFT MEMBERSHIP</h2>
        <br></br>
        <div>
        <p>This model membership is tied to an NFT mint address instead of static public address. Each NFT mint address can still have a different quantity of shares as in the Wallet model.</p>
        </div>
        </div>

        <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden checked></input>
        <div className="carousel-item">
        <h2>Wallet Membership</h2>
        <br></br>
        <p> the simplest membership model. It's just a list of each Member's public address and the number of shares they own.</p>
        </div>

        <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden checked></input>
        <div className="carousel-item">
        <h2>Token MEMBERSHIP</h2>
        <br></br>
        <p>The most flexible membership model. Membership is associated with staked ownership of the specified Token.</p>
        </div>

        <label for="carousel-3" className="carousel-control prev control-1">‹</label>
        <label for="carousel-2" className="carousel-control next control-1">›</label>
        <label for="carousel-1" className="carousel-control prev control-2">‹</label>
        <label for="carousel-3" className="carousel-control next control-2">›</label>
        <label for="carousel-2" className="carousel-control prev control-3">‹</label>
        <label for="carousel-1" className="carousel-control next control-3">›</label>

        </div>

        
      </div>
          </div>
          <div id="wallet">
            <img src="/wallet.png"></img>
          </div>
          <div id="grow">
            <img src="/grow.png"></img>
          </div>
        </div>
      </main>
    </div>

  )
}

export default Home
