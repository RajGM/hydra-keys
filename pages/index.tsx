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
