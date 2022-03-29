import './App.css';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

//? Components
import AppForm from './components/AppForm'
import ApplicationItems from './components/ApplicationItems'

//? Initial Form Values Object
const initialFormValues = {
  companyName: '',
  companyPhone: '',
  companyWeb: '',
  jobTitle: '',
  dateApplied: '',
  jobDiscovery: '',
  salaryInfo: '',
  contactQues: '',
  contactName: '',
  contactPhone: '',
  contactEmail: '',
  contactPosition: '',
  currentStatus: '',
  otherNotes: '',
}

function App() {
  //? State

  const [formValues, setFormValues] = useState(initialFormValues);
  const [application,setApplication] = useState([]);

  //? --End State -- //

//? Form Controllers
  const updateValues = (inputName, inputValue) => {
    setFormValues({
      ...formValues,
      [inputName]: inputValue
    })
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    const newApplication = {
      id: uuid(),
      companyName: formValues.companyName,
      companyPhone: formValues.companyPhone,
      companyWeb: formValues.companyWeb,
      jobTitle: formValues.jobTitle,
      dateApplied: formValues.dateApplied,
      jobDiscovery: formValues.jobDiscovery,
      salaryInfo: formValues.salaryInfo,
      contactQues: formValues.contactQues,
      contactName: formValues.contactName,
      contactPhone: formValues.contactPhone,
      contactEmail: formValues.contactEmail,
      contactPosition: formValues.contactPosition,
      currentStatus: formValues.currentStatus,
      otherNotes: formValues.otherNotes,
    }


    setApplication([...application, newApplication]);
    setFormValues(initialFormValues);
    console.log(application);
  }
//? --End Form Controllers -- //





  return (
    <div className="App">
      <header>
        <h1> Job Tracker </h1>
      </header>
      <AppForm values = {formValues} update = {updateValues} submit = {handelSubmit}/>
      {
        application && <ApplicationItems application = {application} />
      }

    </div>
  );
}

export default App;



// Data: Job Status (applies, interview, contacted),

// Form: 

// -Company Name
// -company phone
// -company website
// -Job Title
// -Date Applied
// -Where you applied
// -Salary info
// -Contact Notes (name, phone, email, position)
// -current status(applied, interview, denied, contacted)
// -Other Notes(current interview status, reason for denial any other relevant notes)
