import BasicTextInput from "../inputs/BasicTextInput"

export default function GeneralForm() {
  return (
    <div className='flex column'>
      <BasicTextInput type='text' label='name' />
      <BasicTextInput type='text' label='email' />
      <BasicTextInput stuff='something' type='tel' label='phone' />
    </div>
  )
}