import { useState, createContext } from 'react'
import './App.css'
import Section from './components/Section'
import Form from './components/forms/Form'
import BasicTextInput from './components/inputs/BasicTextInput'
import ListInput from './components/inputs/ListInput'
import DateRange from './components/inputs/DateRange'
import CV from './components/CV'

let allFormsDataContext = createContext()

function App() {
  const [allFormsData, setAllFormsData] = useState({general_info: {name: ''}, education: [{}], experience: [{}]})

  return (
    <allFormsDataContext.Provider value={{allFormsData, setAllFormsData}}>
      <div className='main-container'>
        <div className="section-container">
          <Section  title='General Info'>
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
          <Section crudEnabled={true} title='Education'>
            <Form
              className='form'
              title={'Education'}
            >
              <BasicTextInput type='text' labelName='School name' />
              <DateRange></DateRange>
            </Form>
          </Section>
          <Section crudEnabled={true} title='Experience'>
            <Form>
              <BasicTextInput type='text' labelName='Company name' />
              <BasicTextInput type='text' labelName='Job title' />
              <DateRange></DateRange>
            </Form>
          </Section>
        </div>
        <CV>

        </CV>
      </div>
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
    </allFormsDataContext.Provider>
  )
}

export default App
export { allFormsDataContext }
