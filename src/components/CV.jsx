import { useContext } from "react"
import { allFormsDataContext } from "../App"

export default function CV() {
  // {"general_info":{},"education":[{}],"experience":[{}]}
  let {allFormsData} = useContext(allFormsDataContext)
  const {name, email, phone} = allFormsData.general_info[0]
  const {school_name} = allFormsData.education[0]
  const {school_name1} = allFormsData.education[1] || {}
  
  return (
    <div className='cv-container'>
      <p>{`Name: ${name || ''}`}</p>
      <p>{`Email: ${email || ''}`}</p>
      <p>{`Phone: ${phone || ''}`}</p>
      <p>{`School name: ${school_name}`}</p>
      <p>{`School name2: ${school_name1}`}</p>
    </div>
  )
}
  