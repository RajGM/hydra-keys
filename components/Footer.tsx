import type { NextPage } from 'next'

const Footer: NextPage = () => {

    return (
        <footer className="footer p-20 bg-neutral text-neutral-content grid-flow-row footerDiv" >
            <div className="items-center grid-flow-col">
                <div  className='footerLogoDiv'>
                    <img id="logoImg" src="logo_modified.svg" width="80" height="78" />
                </div>
                <div style={{ width: "56px" }}></div>
                <div >
                    <p>Hydra wallet</p>
                </div>
            </div>
            <div >
                <div>
                    <p>@All rights reserved - Hydra Wallet 2022</p>
                </div>
            </div>
        </footer>

    );
}

export default Footer