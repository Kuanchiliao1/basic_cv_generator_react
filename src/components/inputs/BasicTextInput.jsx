import { useContext } from "react"
import { allFormsDataContext } from "../../App"
import { v4 as uuidv4 } from "uuid"

export default function BasicTextInput({labelName, ...rest}) {
  let {allFormsData, setAllFormsData} = useContext(allFormsDataContext)
  let id = uuidv4()
  // {"general_info":{},"education":[{}],"experience":[{}]}

  const handleInputChange = (e) => {
    setAllFormsData(prevData => ({...prevData, general_info: {name: e.target.value}}))
  }

  return (
    <>
      <label htmlFor={id}>{labelName}</label>
      <input type="text" name={id} value={allFormsData['general_info'].name} onChange={handleInputChange} {...rest} />
    </>
  )
}