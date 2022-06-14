import type { NextPage } from 'next'
import CreateWalletForm from "../components/CreateWalletForm";

const Create: NextPage = () => {
  return <div className="container mx-auto h-4/5 gap-10 flex flex-col justify-center items-center">
    <h1 className="w-full text-center md:text-left text-3xl md:text-4xl font-bold text-white">Create a Hydra Wallet</h1>
    <CreateWalletForm/>
  </div>
}

export default Create
