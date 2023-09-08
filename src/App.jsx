import { useState } from 'react'
import './App.css'
import Section from './components/Section'
import GeneralForm from './components/forms/GeneralForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GeneralForm />
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
