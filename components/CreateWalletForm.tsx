import { useFormik } from 'formik'

const CreateWalletForm = () => {
  const initialValues = {
    name: '',
    shares: 0,
    model: 'Wallet membership',
    acceptSPL: 0,
    pubKeySPL: '',
  }

  const onSubmit = (values: any) => {
    console.log('submitted', values)
  }

  const validate = (values: any) => {
    let errors = {}

    if(!values.name) {
      // @ts-ignore
      errors.name = 'This field is required'
    }


    if(values.shares == 0) {
      // @ts-ignore
      errors.shares = 'Enter a valid number of shares'
    }

    return errors
  }

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  })

  return (
    <form
      className="flex w-full flex-wrap gap-y-10"
      onSubmit={formik.handleSubmit}
    >
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-10">
        <div className="form-control w-4/5">
          <label className="label">
            <span className="text-white">Hydra Wallet name</span>
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter a name for your wallet"
            className="input input-bordered w-full"
            { ...formik.getFieldProps('name')}
          />
          <label>
            <span className="label-text-alt text-white text-sm">
              * choose a unique name for your wallet
            </span>
          </label>

          {formik.errors.name && formik.touched.name ? <div className="text-red-500">{formik.errors.name}</div> : null}
        </div>

        <div className="form-control w-4/5">
          <label className="label">
            <span className="text-white">Total Shares</span>
          </label>
          <input
            type="number"
            id="shares"
            placeholder="Enter a number of shares"
            className="input input-bordered w-full"
            { ...formik.getFieldProps('shares')}
          />
          {formik.errors.shares && formik.touched.shares ? <div className="text-red-500">{formik.errors.shares}</div> : null}
        </div>
      </div>

      <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-10">
        <div className="form-control w-4/5">
          <label className="label">
            <span className="text-white">Pick a membership Model</span>
          </label>
          <select
            id="model"
            className="select select-bordered w-full"
            { ...formik.getFieldProps('model')}
          >
            <option>Wallet membership</option>
            <option>NFT membership</option>
            <option>Token membership</option>
          </select>
        </div>

        <div className="form-control w-4/5">
          <label className="cursor-pointer flex gap-3">
            <input
              type="checkbox"
              id="acceptSPL"
              className="checkbox checkbox-primary"
              { ...formik.getFieldProps('acceptSPL')}
            />
            <span className="text-white">Accept SPL Tokens</span>
          </label>

          <label className="label">
            <span className="text-white">Enter SPL token public key</span>
          </label>
          <input
            type="text"
            id="pubKeySPL"
            placeholder="Enter a public key"
            className="input input-bordered w-full"
            { ...formik.getFieldProps('pubKeySPL')}
          />
        </div>
      </div>

      <div className="w-full flex justify-center md:justify-end">
        <button type="submit" className="btn btn-secondary">
          Create
        </button>
      </div>
    </form>
  )
}

export default CreateWalletForm
