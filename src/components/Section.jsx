import {useState} from 'react'

export default function Section({ children, crudEnabled=false, title}) {
  const [extraForms, setExtraForms] = useState([])

  function handleAddForm() {
    setExtraForms(prevForms => [...prevForms, children])
  }

  function handleRemoveForm() {
    setExtraForms(prevForms => prevForms.filter((form, index) => index < prevForms.length - 1 ))
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