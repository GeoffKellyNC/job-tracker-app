import './App.css';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Route, Switch, useHistory } from 'react-router-dom';

//? Components
import Home from './components/Home';
import AppForm from './components/AppForm'
import AppDetails from './components/AppDetails'
import EditForm  from './components/EditForm';
import Stats from './components/Stats';
import CompanyData from './components/CompanyData';

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
  dateApplied: '2022-03-01',
  jobDiscovery: 'Google',
  salaryInfo: '$100,000',
  contactQues: 'Yes',
  contactName: 'John Doe',
  contactPhone: '123-456-7890',
  contactEmail: 'johndoe@email.com',
  contactPosition: 'Manager',
  currentStatus: 'Interview Phase',
  otherNotes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua'
}

function App() {
  //? State

  const [formValues, setFormValues] = useState(initialFormValues);
  const [application,setApplication] = useState([demoApplication]);
  const [appCount, setAppCount] = useState(application.length);
  const [totalApps, setTotalApps] = useState(application.length);
  //? --End State -- //

  //? History
  const history = useHistory();

  //? --End History -- //

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
    setAppCount(appCount + 1);
    setTotalApps(totalApps + 1);
    history.push('/');
  }

  const deleteApp = (id) => {
    const newAppList = application.filter(app => app.id !== id);
    setApplication(newAppList);
    setAppCount(appCount - 1);
  }
    //! --Edit Form Function --//
    const updateEdit = (e, editApp) => {
      e.preventDefault();
      setApplication(application.map(app => {
        if (app.id === editApp.id){
          return editApp
        }
        return app
      }))
      history.push('/')
    }
    //! --End Edit Form Function --//


  
//? --End Form Controllers -- //

//? --Component Functions -- //
  return (
    <div className="App">
      <header>
        <h1> Job Tracker </h1>
      </header>
      <Switch >
        <Route path = {`/edit/:appID`}>
          <EditForm details = {application}  updateEdit = {updateEdit}  />
        </Route>
        <Route path = {`/companyData`}>
          <CompanyData data = {application} />
        </Route>
        <Route path = {"/stats"}>
          <Stats applicationData = {application} totalApps = {totalApps} />
        </Route>
        <Route  path = "/form" >
          <AppForm values = {formValues} update = {updateValues} submit = {handelSubmit}/>
        </Route>
        <Route path = {`/:appID`}>
          <AppDetails details = {application} />
        </Route>
        <Route exact path = "/">
          <Home application = {application} appCount = {appCount} deleteApp = {deleteApp} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
