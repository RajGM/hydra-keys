import { useAnchorWallet, useConnection } from '@solana/wallet-adapter-react'
import { FormikErrors, useFormik } from 'formik'
import { useAppSelector } from '../hooks/useAppSelector'
import { selectCluster } from '../redux/features/wallet/walletSlice'

import { useRef } from 'react'
import { FanoutClient } from '@glasseaters/hydra-sdk'
import { Transaction } from '@solana/web3.js'

type AddMemberModalProps = {
  wallet: any
}

interface FormValues {
  pubKey: string
  shares: number
}

const AddMemberModal = ({ wallet }: AddMemberModalProps) => {
  let toggleRef = useRef<HTMLInputElement>(null)

  const initialValues = {
    pubKey: '',
    shares: 0,
  }

  const { connection } = useConnection()
  const cluster = useAppSelector(selectCluster)
  const walletPub = useAnchorWallet()
  const onSubmit = async (values: any) => {
    console.log('submitted', values)
    // add the wallet member here
    if (!wallet) {
      return
    }

    try {
      const fanoutSdk = new FanoutClient(connection, wallet)

      // Prepare transaction
      const tx = new Transaction()
      const ixAddMember = await fanoutSdk.addMemberWalletInstructions({
        fanout: wallet.pubKey,
        membershipKey: values.pubKey,
        shares: 10,
      })
      tx.add(...ixAddMember.instructions)

      // Sign transaction using user's wallet
      tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash
      tx.feePayer = wallet.publicKey
      const txSigned = await wallet.signTransaction(tx)

      // Send API request
      const res = await fetch('api/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          tx: txSigned.serialize().toString('base64'),
          memberPubkey: values.pubKey.toBase58(),
          shareCount: values.shares,
          walletPubKey: wallet.pubKey.toBase58(),
          cluster,
        }),
      })

      if (res.status === 200) {
        console.log('success')
        //redirect to manage page
      } else {
        const json = await res.json()
      }
      toggleRef.current!.checked = false
    } catch (error: any) {
      console.log('Failed to add member')
    }
  }

  const validate = (values: any) => {
    let errors: FormikErrors<FormValues> = {}

    if (!values.pubKey) {
      errors.pubKey = 'This field is required'
    }

    return errors
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="checkbox"
          id="add-member-modal"
          className="modal-toggle"
          ref={toggleRef}
        />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg pb-2">
              Add a member to your Wallet
            </h3>
            <label className="label">Public key:</label>
            <input
              type="text"
              placeholder="Enter the member's public key"
              className="input input-bordered w-full"
              {...formik.getFieldProps('pubKey')}
            />
            <label className="label">Shares:</label>
            <input
              type="number"
              placeholder="Enter the member's shares"
              className="input input-bordered w-full"
              {...formik.getFieldProps('shares')}
            />

            {formik.errors.pubKey && formik.touched.pubKey ? (
              <div className="text-red-500">{formik.errors.pubKey}</div>
            ) : null}

            <div className="flex w-full justify-end gap-4">
              <div className="modal-action">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={
                    !(formik.dirty && formik.isValid) || formik.isSubmitting
                  }
                >
                  Add
                </button>
              </div>
              <div className="modal-action">
                <label htmlFor="add-member-modal" className="btn">
                  Cancel
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default AddMemberModal
