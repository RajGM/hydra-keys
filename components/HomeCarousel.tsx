const HomeCarousel = () => {
  return (
    <div>
      <div className="slider">
        <div className="circular-slider circular-slider-1">
          <div className="wrapper">
            <div className="controls">
              <div className="controls__left">
                <div className="icon-wrapper">
                  <i className="far fa-arrow-alt-circle-left"></i>
                </div>
              </div>
              <div className="controls__right">
                <div className="icon-wrapper">
                  <i className="far fa-arrow-alt-circle-right"></i>
                </div>
              </div>
              <div className="controls__autoplay controls__autoplay_running">
                <div className="icon-wrapper">
                  <div className="pause">
                    <i className="far fa-pause-circle"></i>
                  </div>
                  <div className="run">
                    <i className="far fa-play-circle"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="slides-holder">
              <div className="slides-holder__item slides-holder__item_active">
                <img src="/NFT.png" alt="img" />
              </div>
              <div className="slides-holder__item">
                <img src="/wallet.png" alt="img" />
              </div>
              <div className="slides-holder__item">
                <img src="/grow.png" alt="img" />
              </div>
            </div>
            <div className="descriptions">
              <div className="descriptions__item descriptions__item_visible">
                <h1>NFT Membership</h1>
                <p className="description">
                  Using NFTs, the membership is tied to an NFT mint address
                  instead of static public address. Each NFT mint address can
                  still have a different quantity of shares as in the Wallet
                  model
                </p>
              </div>
              <div className="descriptions__item">
                <h1>Wallet Membership</h1>
                <p className="description">
                  {' '}
                  One of the simplest membership model. It's just a list of each
                  Member's public address and the number of shares they own.
                </p>
              </div>
              <div className="descriptions__item">
                <h1>Token Membership</h1>
                <p className="description">
                  {' '}
                  The Token is the most flexible membership model, but is a bit
                  more complicated. In this model, Membership is associated with
                  staked ownership of the specified Token.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="/slider.js"></script>
    </div>
  )
}

export default HomeCarousel
