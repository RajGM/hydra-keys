import styles from '../styles/MemembersList.module.css'

type MemembersDetailsProps = {
    members: Array<any>
  }

const MembersTable = ({ members }: MemembersDetailsProps) => { 
    return (
        <table className="table-normal rounded w-full">
            <thead className={`text-xl ${styles.th}`}>
              <tr>
                <th>Address</th>
                <th>Added on</th>
                <th>Shares</th>
                <th>Distribute Funds</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member: any, key: any) => (
                <tr className={styles.membersList} key={key}>
                  <th>{member?.address}</th>
                  <td className="text-center">{member?.addedOn}</td>
                  <td className="text-center">{member?.shares}</td>
                  <td className="text-center">
                    <button className={`btn w-8/12 sm:w-fit px-6 text-lg font-normal border-none ${styles.distributeBtn}`}>
                      Distribute
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
    )
}

export default MembersTable