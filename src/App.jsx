import { useState } from 'react'
import './App.css'
import Section from './components/Section'
import Form from './components/forms/Form'
import BasicTextInput from './components/inputs/BasicTextInput'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Form
        title='General Info'
      >
        <BasicTextInput type='text' label='name' />
        <BasicTextInput type='text' label='email' />
        <BasicTextInput stuff='something' type='tel' label='phone' />
      </Form>
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
