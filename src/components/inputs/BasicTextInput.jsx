import { useContext } from "react"
import { allFormsDataContext } from "../../App"
import { v4 as uuidv4 } from "uuid"

export default function BasicTextInput({labelName, ...rest}) {
  let value = useContext(allFormsDataContext)
  let id = uuidv4()
  // {"general_info":{},"education":[{}],"experience":[{}]}

  return (
    <>
      <label htmlFor={id}>{labelName}</label>
      <input type="text" name={id} {...rest} />
    </>
  )
}