import styles from '../styles/ConnectWalletModal.module.css'

const ConnectWalletModal = ({ closeModal }) => {
  return (
    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className={styles.modalbackdrop}></div>
      <div className="modal-box relative">
        <label
          onClick={closeModal}
          className="btn btn-sm btn-circle absolute right-2 top-2"
        >
          ✕
        </label>
        <h3 className="text-lg font-bold">Message</h3>
        <p className="py-10 text-center text-xl">
          Please Connect your Wallet to Get Started !!
        </p>
      </div>
    </div>
  )
}

export default ConnectWalletModal
