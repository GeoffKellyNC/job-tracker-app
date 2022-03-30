import './App.css';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Route, Switch } from 'react-router-dom';

//? Components
import Home from './components/Home';
import AppForm from './components/AppForm'
import ApplicationItems from './components/ApplicationItems'
import AppDetails from './components/AppDetails'

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

const demoApplication = {
  id: uuid(),
  companyName: 'Google',
  companyPhone: '123-456-7890',
  companyWeb: 'www.google.com',
  jobTitle: 'Software Engineer',
  dateApplied: '01/01/2020',
  jobDiscovery: 'Google',
  salaryInfo: '$100,000',
  contactQues: 'Yes',
  contactName: 'John Doe',
  contactPhone: '123-456-7890',
  contactEmail: 'johndoe@email.com',
  contactPosition: 'Manager',
  currentStatus: 'Interview',
  otherNotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
}

function App() {
  //? State

  const [formValues, setFormValues] = useState(initialFormValues);
  const [application,setApplication] = useState([demoApplication]);

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
      <Switch >
        <Route  path = "/form" >
          <AppForm values = {formValues} update = {updateValues} submit = {handelSubmit}/>
        </Route>
        <Route path = {`/:appID`}>
          <AppDetails details = {application} />
        </Route>
        <Route exact path = "/">
          <Home application = {application} />
        </Route>
      </Switch>
    

    </div>
  );
}

export default App;
