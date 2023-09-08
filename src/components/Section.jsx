import {useState} from 'react'

export default function Section({ children, crudEnabled=false}) {
  const [forms, setForms] = useState([])

  function handleAddForm() {
    setForms(prevForms => [...prevForms, children])
  }

  function handleRemoveForm() {
    setForms(prevForms => [...prevForms])
  }

  return (
    <div className="section">
      {crudEnabled && <button onClick={() => handleAddForm()}>Add</button>}
      {children}
      {forms}
      {crudEnabled && <button onClick={() => handleRemoveForm()}>Remove</button>}
    </div>
  )
}