// import './App.css';
import React, { useState, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { Route, Switch, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux'
import * as actions from './redux/action-creators'

// Components
import Home from './components/sections/home/Home';
import AppForm from './components/sections/forms/AppForm';
import AppDetails from './components/sections/appDetails/AppDetails';
import EditForm  from './components/sections/forms/EditForm';
import Stats from './components/sections/stats/Stats';
import CompanyData from './components/CompanyData';
import About from './components/sections/about/About';
import Jobs from './components/sections/jobs/Jobs'


// Initial Form Values Object


function App(props) {

  const { 
    applications, 
    changeInput,
    form,
    handleSubmit,
    deleteApplication,
    editForm,
    fetchApplicationData
   } = props



  // State

  const [appCount, setAppCount] = useState(applications.length);
  const [isLoaded, setIsLoaded] = useState(false);

  // --End State -- //

  useEffect(() => {
    fetchApplicationData()

  }, [])

  useEffect(() => {
    setAppCount(applications.length)
    setIsLoaded(true)
  }, [applications])
  

  // History
  const history = useHistory();

  // --End History -- //



// Application Form Controllers
  const updateValues = (inputName, inputValue) => {
    changeInput({ name: inputName, value: inputValue })
  }

  const handelSubmit = (e) => {
    e.preventDefault();
    const newApplication = {
      id: uuid(),
      companyName: form.companyName,
      companyPhone: form.companyPhone,
      companyWeb: form.companyWeb,
      jobTitle: form.jobTitle,
      dateApplied: form.dateApplied,
      jobDiscovery: form.jobDiscovery,
      salaryInfo: form.salaryInfo,
      contactQues: form.contactQues,
      contactName: form.contactName,
      contactPhone: form.contactPhone,
      contactEmail: form.contactEmail,
      contactPosition: form.contactPosition,
      currentStatus: form.currentStatus,
      otherNotes: form.otherNotes,
    }
    handleSubmit(newApplication);


    setAppCount(appCount + 1);
    history.push('/');
  }

  const deleteApp = (id) => {
    deleteApplication(id);
    setAppCount(appCount - 1);
    history.push('/');
    
  }

    const updateEdit = (e, editApp) => {
      e.preventDefault();
      editForm(editApp);
      history.push('/')
    }
    //* --End Edit Form Function --//


  
// --End Form Controllers -- //

// --Component Functions -- //
  return (
    <StyledApp className="App">
      <header>
        <h1> Application Tracker (0.0.1a) </h1>
      </header>
      {isLoaded ? 
        <Switch >
        <Route path = "/jobs">
          <Jobs />
        </Route>
        <Route path = {`/edit/:appID`}>
          <EditForm details = {applications}  updateEdit = {updateEdit}  />
        </Route>
        <Route path = {"/about"}>
          <About />
        </Route>
        <Route path = {`/companyData`}>
          <CompanyData data = {applications} />
        </Route>
        <Route path = {"/stats"}>
          <Stats applicationData = {applications} totalApps = {appCount} />
        </Route>
        <Route  path = "/form" >
          <AppForm  update = {updateValues} submit = {handelSubmit}/>
        </Route>
        <Route path = {`/:appID`}>
          <AppDetails />
        </Route>
        <Route exact path = "/">
          <Home application = {applications} appCount = {appCount} deleteApp = {deleteApp} />
        </Route>
      </Switch> : <h1 className = 'loading-text'>Getting Data...</h1>}
      
    </StyledApp>
  );
}

const mapStateToProps= state => {
  return{
    applications: state.applications,
    form: state.form,
    stats: state.stats
  }
}

export default connect(mapStateToProps, actions)(App)



const StyledApp = styled.div`
    body{
      background-color: #F7F0F0;
  }

  .loading-text{
    font-size: 2rem;
    font-weight: bold;
    color: red;
    text-align: center;
    margin-top: 50px;
  }

  h1{
      font-family: 'Poppins', sans-serif;
      color: white;
      text-align: center;
      margin: 0 auto;
      padding: 1em;
      font-size: 3em;
  }

  header{
      background-color: ${pr => pr.theme.colors.burgundy};
      box-shadow: 0px 0px 10px white;
  }

  .home-container h2{
      font-family: 'Poppins', sans-serif;
      color: white;
      margin: 0;
      padding: 1em;
      font-size: 2em;
  }




`
