export default function Section({ children, crudEnabled=false }) {
  function handleBtn() {
    
  }

  return (
    <div className="section">
      {crudEnabled && <button onClick={() => handleBtn()}>Add</button>}
      {children}
      {crudEnabled && <button>Remove</button>}
    </div>
  )
}