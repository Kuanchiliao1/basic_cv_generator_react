import { useContext } from "react"
import { allFormsDataContext } from "../App"

export default function CV() {
  // {"general_info":{},"education":[{}],"experience":[{}]}
  let {allFormsData} = useContext(allFormsDataContext)
  console.log(allFormsData['general_info'].name)
  
  return (
    <div className='cv-container'>
      {allFormsData['general_info'].name}
    </div>
  )
}
  