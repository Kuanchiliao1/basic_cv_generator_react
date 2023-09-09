import { useContext } from "react"
import { allFormsDataContext } from "../../App"
import { v4 as uuidv4 } from "uuid"
import toSnakeCase from "../../utilities/toSnakeCase"

export default function BasicTextInput({ labelName, title, ...rest }) {
  let { allFormsData, setAllFormsData } = useContext(allFormsDataContext)
  let id = uuidv4()
  const sectionKey = toSnakeCase(title || '')
  let inputKey = toSnakeCase(labelName)
  console.log({ inputKey })
  console.log({ title })
  // {"general_info":{},"education":[{}],"experience":[{}]}

  const handleInputChange = (e) => {
    setAllFormsData(prevData => (
      {
        ...prevData,
        [sectionKey]:
          { ...prevData[sectionKey], [inputKey]: e.target.value }
      }
    ))
  }

  return (
    <>
      <label htmlFor={id}>{labelName}</label>
      <input type="text" name={id} value={allFormsData['general_info'][inputKey]} onChange={handleInputChange} {...rest} />
    </>
  )
}