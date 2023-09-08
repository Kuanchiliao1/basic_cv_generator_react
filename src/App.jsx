import { useState } from 'react'
import './App.css'
import Section from './components/Section'
import Form from './components/forms/Form'
import BasicTextInput from './components/inputs/BasicTextInput'
import ListInput from './components/inputs/ListInput'
import DateRange from './components/inputs/DateRange'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Section>
        <Form
          className='form'
          title='General Info'
        >
          <BasicTextInput type='text' labelName='Name' />
          <BasicTextInput type='text' labelName='Email' />
          <BasicTextInput stuff='something' type='tel' labelName='Phone' />
          <ListInput>
            {['testing', 'stuff']}
          </ListInput>
        </Form>
      </Section>
      <Section crudEnabled={true}>
        <Form
          className='form'
          title='Education'
        >
          <BasicTextInput type='text' labelName='School name' />
          <DateRange></DateRange>
        </Form>
      </Section>
      {/* <Section>
        <Form>
          <Input />
          <Input />
        </Form>
      </Section>
      <Section>
        <EducationForm>

        </EducationForm>
      </Section>
      <Section>
        <ExperienceForm>
          
        </ExperienceForm>
      </Section> */}
    </>
  )
}

export default App
