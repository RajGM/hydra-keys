import { FormikErrors, useFormik } from 'formik'
import { useRef } from 'react'

interface FormValues {
  pubKey: string
}

const AddMemberModal = () => {
  let toggleRef = useRef<HTMLInputElement>(null)

  const initialValues = {
    pubKey: '',
  }

  const onSubmit = (values: any) => {
    console.log('submitted', values)
    // add the wallet member here
    toggleRef.current!.checked = false
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
            <h3 className="font-bold text-lg pb-5">
              Add a member to your Wallet
            </h3>
            <label className="label">Public key:</label>
            <input
              type="text"
              placeholder="Enter the member's public key"
              className="input input-bordered w-full"
              {...formik.getFieldProps('pubKey')}
            />
            {formik.errors.pubKey && formik.touched.pubKey ? (
              <div className="text-red-500">{formik.errors.pubKey}</div>
            ) : null}

            <div className="flex w-full justify-end gap-4">
              <div className="modal-action">
                <button type="submit" className="btn btn-primary">
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
