import {useState, cloneElement, useContext} from 'react'
import { allFormsDataContext } from "../App";
import toSnakeCase from '../utilities/toSnakeCase';

export default function Section({ children, crudEnabled=false, title}) {
  const [extraForms, setExtraForms] = useState([])
  const sectionKey = toSnakeCase(title || "");
  let { setAllFormsData } = useContext(allFormsDataContext);


  function handleAddForm() {
    const formIndex = extraForms.length + 1
    const form = cloneElement(children, {formIndex: formIndex})
    setExtraForms(prevForms => [...prevForms, form])

    setAllFormsData((prevData) => {
      console.log('allFormsData', {
        ...prevData,
        [sectionKey]: Object.assign([], prevData[sectionKey], {[formIndex]: {}})
      })
      return {
        ...prevData,
        [sectionKey]: Object.assign([], prevData[sectionKey], {formIndex: undefined})
      }
    })
  }

  function handleRemoveForm() {
    setExtraForms(prevForms => prevForms.filter((form, index) => index < prevForms.length - 1 ))

    setAllFormsData((prevData) => {
      return {
        ...prevData,
        [sectionKey]: Object.assign([], prevData[sectionKey].slice(0, -1))
      }
    })
  }

  return (
    <div className="section">
      <h2>{title}</h2>
      {crudEnabled && <button onClick={() => handleAddForm()}>Add</button>}
      {crudEnabled && <button onClick={() => handleRemoveForm()}>Remove</button>}
      {children}
      {extraForms}
    </div>
  )
}