import { useContext } from "react"
import { allFormsDataContext } from "../App"

export default function CV() {
  // {"general_info":{},"education":[{}],"experience":[{}]}
  let {allFormsData} = useContext(allFormsDataContext)
  const {name, email, phone} = allFormsData.general_info[0]
  const {school_name} = allFormsData.education[0]
  
  return (
    <div className='cv-container'>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{school_name}</p>
    </div>
  )
}
  