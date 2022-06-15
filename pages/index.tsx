import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    //section3
    <div className='section3'> 
      <h1>Membership Models</h1>
      <img src="/NFT.png" className="NFT"></img> 
      <div className='semi'> 
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

        <label for="carousel-3" class="carousel-control prev control-1">‹</label>
        <label for="carousel-2" class="carousel-control next control-1">›</label>
        <label for="carousel-1" class="carousel-control prev control-2">‹</label>
        <label for="carousel-3" class="carousel-control next control-2">›</label>
        <label for="carousel-2" class="carousel-control prev control-3">‹</label>
        <label for="carousel-1" class="carousel-control next control-3">›</label>

        </div>

        
      </div>
      

      </div> 
        <div id="wallet"> 
          <img src="/wallet.png" ></img> 
        </div> 
        <div id="grow"> 
          <img src="/grow.png"></img> 
        </div> 
      </div>
  )
}

export default Home
