const CreateWalletForm = () => {
    return (
        <div className="flex w-full flex-wrap gap-y-10">
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-10">
                <div className="form-control w-4/5">
                    <label className="label">
                        <span className="text-white">Hydra Wallet name</span>
                    </label>
                    <input type="text" placeholder="Enter a name for your wallet" className="input input-bordered w-full"/>
                    <label>
                        <span className="label-text-alt text-white text-sm">* choose a unique name for your wallet</span>
                    </label>
                </div>


                <div className="form-control w-4/5">
                    <label className="label">
                        <span className="text-white">Total Shares</span>
                    </label>
                    <input type="text" placeholder="Enter a number of shares" className="input input-bordered w-full"/>
                </div>

            </div>

            <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-10">
                <div className="form-control w-4/5">
                    <label className="label">
                        <span className="text-white">Pick a membership Model</span>
                    </label>
                    <select className="select select-bordered w-full">
                        <option>Wallet membership</option>
                        <option>NFT membership</option>
                        <option>Token membership</option>
                    </select>
                </div>


                <div className="form-control w-4/5">
                    <label className="cursor-pointer flex gap-3">
                        <input type="checkbox" className="checkbox checkbox-primary"/>
                        <span className="text-white">Accept SPL Tokens</span>
                    </label>

                    <label className="label">
                        <span className="text-white">Enter SPL token public key</span>
                    </label>
                    <input type="text" placeholder="Enter a public key" className="input input-bordered w-full"/>

                </div>

            </div>

            <div className="w-full flex justify-center md:justify-end">
                <button type="submit" className="btn btn-secondary">Create</button>
            </div>
        </div>
    )
}

export default CreateWalletForm
