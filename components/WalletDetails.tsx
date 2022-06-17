import { FaCog, FaUserPlus, FaUsers } from 'react-icons/fa'

type WalletDetailsProps = {
  wallet: any
}

const WalletDetails = ({ wallet }: WalletDetailsProps) => {
  return (
    <div className="w-full flex flex-col gap-16">
      <div className="flex justify-between">
        <div>
          <h1 className="w-full text-center md:text-left text-3xl md:text-4xl font-bold text-primary dark:text-white">
            #{wallet.name}
          </h1>
          <span>{wallet.pubKey}</span>
        </div>

        <div className="tooltip tooltip-secondary" data-tip="Add members">
          <button
            className="bg-secondary h-12 w-12 flex hover:brightness-90 justify-center items-center rounded-lg"
            type="button"
          >
            <FaUserPlus className="text-white text-xl" />
          </button>
        </div>
      </div>

      <div>
        <div className="flex justify-between relative items-end w-full">
          <div className="group">
            <div className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-40 flex justify-center h-full items-center -left-6">
              <FaUsers className="text-white" />
            </div>

            <p className="text-xl font-bold">Members</p>
          </div>

          <p>Total shares: {wallet.shares}</p>
        </div>
        {/*add members table here */}
        <div className="w-full bg-white bg-opacity-25 h-80"></div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="group relative">
          <div className="absolute transition-opacity duration-300 opacity-0 group-hover:opacity-40 flex justify-center h-full items-center -left-6">
            <FaCog className="text-white" />
          </div>

          <h6 className="text-xl font-bold">Settings</h6>
        </div>

        <div className="flex justify-between">
          <p>Membership model: </p>
          <p>{wallet.model}</p>
        </div>

        <div className="flex w-full justify-between">
          <div className="flex justify-between w-1/3">
            <p>Accept SPL token: </p>
            <p className="text-primary">
              {wallet.acceptSPL ? <span>Accept</span> : <span>No</span>}
            </p>
          </div>

          {wallet.acceptSPL ? (
            <div className="flex justify-between">
              <p className="mr-3">SPL public key: </p>
              <p className="text-primary"> {wallet.pubKeySPL}</p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default WalletDetails
