import { useContext } from "react"
import { allFormsDataContext } from "../App"

export default function CV() {
  // {"general_info":{},"education":[{}],"experience":[{}]}
  let {allFormsData} = useContext(allFormsDataContext)
  const {name, email, phone} = allFormsData.general_info[0]
  const educationSection = allFormsData.education
  
  return (
    <div className='cv-container'>
      <p>{`Name: ${name || ''}`}</p>
      <p>{`Email: ${email || ''}`}</p>
      <p>{`Phone: ${phone || ''}`}</p>
      {educationSection.map((form, index) => {
        const { school_name } = form
        console.log({index})
        return (<p>{`School name: ${school_name}`}</p>)
      })}
    </div>
  )
}
  