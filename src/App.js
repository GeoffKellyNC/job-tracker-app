// import './App.css';
import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Route, Switch, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux'
import * as actions from './redux/action-creators'

//! Components
import Home from './components/sections/home/Home';
import AppForm from './components/sections/forms/AppForm';
import AppDetails from './components/sections/appDetails/AppDetails';
import EditForm  from './components/sections/forms/EditForm';
import Stats from './components/sections/stats/Stats';
import CompanyData from './components/CompanyData';
import About from './components/sections/about/About';

//! -- Importing Data -- //

//! Initial Form Values Object


function App(props) {

  const { 
    applications, 
    changeInput,
    form,
    handleSubmit,
    deleteApplication,
    editForm } = props


  //! State

  const [appCount, setAppCount] = useState(applications.length);
  const [totalApps, setTotalApps] = useState(applications.length);
  //! --End State -- //

  //! History
  const history = useHistory();

  //! --End History -- //

//! Form Controllers
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
    setTotalApps(totalApps + 1);
    history.push('/');
  }

  const deleteApp = (id) => {
    deleteApplication(id);
    setAppCount(appCount - 1);
  }

    const updateEdit = (e, editApp) => {
      e.preventDefault();
      editForm(editApp);
      history.push('/')
    }
    //* --End Edit Form Function --//


  
//! --End Form Controllers -- //

//! --Component Functions -- //
  return (
    <StyledApp className="App">
      <header>
        <h1> Job Tracker </h1>
      </header>
      <Switch >
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
          <Stats applicationData = {applications} totalApps = {totalApps} />
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
      </Switch>
    </StyledApp>
  );
}

const mapStateToProps= state => {
  return{
    applications: state.applications,
    form: state.form
  }
}

export default connect(mapStateToProps, actions)(App)



const StyledApp = styled.div`
    body{
      background-color: #F7F0F0;
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
      background-color: ${pr => pr.theme.colors.orange};
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
