export default function ListInput({children}) {
  return (
    <ul>
      {children.map(child => <li>{child}</li>)}
    </ul>
  )
}