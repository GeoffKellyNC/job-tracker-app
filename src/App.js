import './App.css';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Route, Switch, useHistory } from 'react-router-dom';

//! Components
import Home from './components/Home';
import AppForm from './components/AppForm'
import AppDetails from './components/AppDetails'
import EditForm  from './components/EditForm';
import Stats from './components/Stats';
import CompanyData from './components/CompanyData';
import About from './components/About';

//! -- Importing Data -- //
import applicationData from './data/dummyData'

//! Initial Form Values Object
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
  //! State

  const [formValues, setFormValues] = useState(initialFormValues);
  const [application,setApplication] = useState(applicationData);
  const [appCount, setAppCount] = useState(application.length);
  const [totalApps, setTotalApps] = useState(application.length);
  //! --End State -- //

  //! History
  const history = useHistory();

  //! --End History -- //

//! Form Controllers
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
    //*/: --Edit Form Function --//

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
    //* --End Edit Form Function --//


  
//! --End Form Controllers -- //

//! --Component Functions -- //
  return (
    <div className="App">
      <header>
        <h1> Job Tracker </h1>
      </header>
      <Switch >
        <Route path = {`/edit/:appID`}>
          <EditForm details = {application}  updateEdit = {updateEdit}  />
        </Route>
        <Route path = {"/about"}>
          <About />
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
