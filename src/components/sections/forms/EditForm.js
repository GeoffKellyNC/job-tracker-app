import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import styled from 'styled-components'






function EditForm({ details, updateEdit }) {
  
  const { appID } = useParams();
//! Initializing state to the Application to be edited
  const [editApp, setEditApp] = useState(details.find(app => app.id === appID))

//! --History -- //
    const history = useHistory();
//! --End History -- //

  

//!-- Handling Form Change Events --//
  const handleChange = (e) => {
    const {name,value} = e.target
    setEditApp({...editApp, [name]: value})
  }
//!-- End Form Change Events --//


  return (
      <StyledEditForm onSubmit={(e) => updateEdit(e, editApp)}>
                <label>Company Name</label>
                <input
                    name = 'companyName'
                    type = 'text'
                    placeholder='Company Name'
                    value = {editApp.companyName}
                    onChange = {handleChange}
                    />
                <label>Company Phone</label>
                <input 
                    name = 'companyPhone'
                    type='tel'
                    placeholder = 'Company Phone Number'
                    value = {editApp.companyPhone}
                    onChange = {handleChange}
                />
                <label>Company Web</label>
                <input
                    name = 'companyWeb'
                    type = 'text'
                    placeholder = 'Company Web Address'
                    value = {editApp.companyWeb}
                    onChange = {handleChange}
                />
                <label>Job Title</label>
                <input
                    name = 'jobTitle'
                    type = 'text'
                    placeholder = 'Job Title'
                    value = {editApp.jobTitle}
                    onChange = {handleChange}
                />
                <label>Date Applied</label>
                <input
                    name = 'dateApplied'
                    type = 'date'
                    placeholder = 'Date Applied'
                    value = {editApp.dateApplied}
                    onChange = {handleChange}
                />
                <label>Job Discovery</label>
                <input
                    name = 'jobDiscovery'
                    type = 'text'
                    placeholder = 'Job Discovery'
                    value = {editApp.jobDiscovery}
                    onChange = {handleChange}
                />
                <label>Salary Info</label>
                <input
                    name = 'salaryInfo'
                    type = 'text'
                    placeholder = 'Salary Info'
                    value = {editApp.salaryInfo}
                    onChange = {handleChange}
                />
                <label className = 'col-3 row-1'>Contacted</label>
                <select className = 'col-4 row-1' name = 'contactQues' value = {editApp.contactQues} onChange = {handleChange}>
                    <option value = ''>--Select Option--</option>
                    <option value = 'Yes'>Yes</option>
                    <option value = 'No'>No</option>
                </select>
                <label className = 'col-3 row-2'>Contact Name</label>
                <input
                    name = 'contactName'
                    type = 'text'
                    placeholder = 'Contact Name'
                    value = {editApp.contactName}
                    onChange = {handleChange}
                    className = 'col-4 row-2'
                />
                <label className = 'col-3 row-3' >Contact Phone</label>
                <input
                    name = 'contactPhone'
                    type = 'tel'
                    placeholder = 'Contact Phone Number'
                    value = {editApp.contactPhone}
                    onChange = {handleChange}
                    className = 'col-4 row-3'
                />
                <label className = 'col-3 row-4'>Contact Email</label>
                <input
                    name = 'contactEmail'
                    type = 'email'
                    placeholder = 'Contact Email'
                    value = {editApp.contactEmail}
                    onChange = {handleChange}
                    className = 'col-4 row-4'
                />
                <label className = 'col-3 row-5'>Contact Position</label>
                <input
                    name = 'contactPosition'
                    type = 'text'
                    placeholder = 'Contact Position'
                    value = {editApp.contactPosition}
                    onChange = {handleChange}
                    className = 'col-4 row-5'
                />
                <label className = 'col-3 row-6'>Current Status</label>
                <select className = 'col-4 row-6' name = 'currentStatus' value = {editApp.currentStatus} onChange = {handleChange}>
                    <option value = ''>--Select Option--</option>
                    <option value = 'applied'>Applied</option>
                    <option value = 'interviewSet'>Interview Phase</option>
                    <option value = 'offer'>Offer</option>
                    <option value = 'rejected'>Rejected</option>
                    <option value = 'contacted'>Contacted</option>
                    <option value = 'other'>Other</option>
                </select>
                <label className = 'col-3'>Other Notes:</label>
                <textarea
                    name = 'otherNotes'
                    type = 'text'
                    placeholder = 'Other Notes'
                    value = {editApp.otherNotes}
                    onChange = {handleChange} 
                    className = 'col-4'>
                </textarea>
                <button className = "edit-sbmt-btn" type = 'submit'>Submit Changes</button>
                <button className = "edit-back-btn" onClick = {() => {history.push("/")}}>Go back</button>
        </StyledEditForm>
  )
}

export default EditForm


const StyledEditForm = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    align-items: center;
    margin-top: 2em;


    input,select{
        width: 50%;
        margin: auto;
        height: 3em;
        border-radius: 5px;
        border: 1px solid #219EBC;
        padding: 0 1em;
        font-size: 1rem;
        margin-bottom: 1em;
        grid-column: 2/3;
    }

    textarea{
        width: 88%;
        margin: auto;
        height: 3em;
        border-radius: 5px;
        border: 1px solid #219EBC;
        padding: 0 1em;
        font-size: 1rem;
        margin-bottom: 1em;
        grid-column: 2/3;
        margin-left: -4em;
    }

    input::placeholder, textarea::placeholder{
        color: rgb(50, 60, 66);
        font-family: 'Poppins', sans-serif;
    }

    label{
        display: block;
        font-size: 1.2rem;
        margin-bottom: 5px;
        margin-left: 1em;
        font-family: 'Poppins', sans-serif;
        color: black;
        grid-column: 1/2;
    }

    .submit-btn, .back-btn{
        grid-column: 2/3;
        width: 20%;
        font-family: 'Poppins', sans-serif;
        margin: 3em;
        padding: 1em;
        border: none;
        border-radius: 5px;
        background-color: #FB8500;
        color: white; 
    }

    .back-btn{
        width: 8em;
    }

    .submit-btn:hover, .back-btn:hover{
        background-color: white;
        color: #FB8500;
        cursor: pointer;
    }


    /* !Edit form Buttons */
    .edit-sbmt-btn, .edit-back-btn{
        grid-column: 2/3;
        width: 12em;
        font-family: 'Poppins', sans-serif;
        margin: 3em;
        padding: 1em;
        border: none;
        border-radius: 5px;
        background-color: #FB8500;
        color: white; 
    }

    .edit-sbmt-btn:hover, .edit-back-btn:hover{
        background-color: white;
        color: #FB8500;
        cursor: pointer;
    }





    .col-1{
        grid-column: 1/2;
    }

    .col-3{
        grid-column: 3/4;
    }

    .col-4{
        grid-column: 4/5;
    }

    .row-1{
        grid-row: 1;
    }

    .row-2{
        grid-row: 2;
    }

    .row-3{
        grid-row: 3;
    }

    .row-4{
        grid-row: 4;
    }
    .row-5{
        grid-row: 5;
    }

    .row-6{
        grid-row: 6;
    }


`