export default function BasicTextInput({stuff, labelName, ...rest}) {
  return (
    <>
      <label htmlFor="">{labelName}</label>
      <input type="text" {...rest} />
    </>
  )
}