export default function BasicTextInput({stuff, ...rest}) {
  return (
    <>
      <input type="text" {...rest} />
      <label htmlFor="">testing</label>
    </>
  )
}