import React from 'react'

import styled from 'styled-components'

import { useHistory } from 'react-router-dom'





function AppForm({ values, update, submit }) {

    const history = useHistory();

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        update(name,value)
    }

    return (
            <StyledAppForm onSubmit={submit}>

                {/*//? Company Name Input*/}
                    <label>Company Name</label>
                    <input
                        name = 'companyName'
                        type = 'text'
                        required
                        placeholder='Company Name'
                        value = {values.companyName}
                        onChange = {handleChange}
                        />

                {/*//? Company Phone Input*/}
                    <label>Company Phone</label>
                    <input 
                        name = 'companyPhone'
                        type='tel'
                        required
                        placeholder = 'Company Phone Number'
                        value = {values.companyPhone}
                        onChange = {handleChange}
                    />

                {/*//? Company Website Input*/}
                    <label>Company Web</label>
                    <input
                        name = 'companyWeb'
                        type = 'text'
                        required
                        placeholder = 'Company Web Address'
                        value = {values.companyWeb}
                        onChange = {handleChange}
                    />

                {/*//? Job Title Input*/}
                    <label>Job Title</label>
                    <input
                        name = 'jobTitle'
                        type = 'text'
                        required
                        placeholder = 'Job Title'
                        value = {values.jobTitle}
                        onChange = {handleChange}
                    />

                {/*//? Date Applied Input*/}
                    <label>Date Applied</label>
                    <input
                        name = 'dateApplied'
                        type = 'date'
                        required
                        placeholder = 'Date Applied'
                        value = {values.dateApplied}
                        onChange = {handleChange}
                    />

                {/*//? Job Discovery Input*/}
                    <label>Job Discovery</label>
                    <input
                        name = 'jobDiscovery'
                        type = 'text'
                        placeholder = 'Job Discovery'
                        value = {values.jobDiscovery}
                        onChange = {handleChange}
                    />

                {/*//? Salary Info Input*/}
                    <label>Salary Info</label>
                    <input
                        name = 'salaryInfo'
                        type = 'text'
                        placeholder = 'Salary Info'
                        value = {values.salaryInfo}
                        onChange = {handleChange}
                    />

                {/*//? Contacted Select */}
                    <label className = 'col-3 row-1'>Contacted</label>
                    <select className = 'col-4 row-1' name = 'contactQues' value = {values.contactQues} onChange = {handleChange}>
                        <option value = ''>--Select Option--</option>
                        <option value = 'Yes'>Yes</option>
                        <option value = 'No'>No</option>
                    </select>

                {/*//? Contact Name Input*/}
                    <label className = 'col-3 row-2'>Contact Name</label>
                    <input
                        name = 'contactName'
                        type = 'text'
                        placeholder = 'Contact Name'
                        value = {values.contactName}
                        onChange = {handleChange}
                        className = 'col-4 row-2'
                    />

                {/*//? Contact Phone Input*/}
                    <label className = 'col-3 row-3' >Contact Phone</label>
                    <input
                        name = 'contactPhone'
                        type = 'tel'
                        placeholder = 'Contact Phone Number'
                        value = {values.contactPhone}
                        onChange = {handleChange}
                        className = 'col-4 row-3'
                    />

                {/*//? Contact Email Input*/}
                    <label className = 'col-3 row-4'>Contact Email</label>
                    <input
                        name = 'contactEmail'
                        type = 'text'
                        placeholder = 'Contact Email'
                        value = {values.contactEmail}
                        onChange = {handleChange}
                        className = 'col-4 row-4'
                    />

                {/*//? Contact Position Input*/}
                    <label className = 'col-3 row-5'>Contact Position</label>
                    <input
                        name = 'contactPosition'
                        type = 'text'
                        placeholder = 'Contact Position'
                        value = {values.contactPosition}
                        onChange = {handleChange}
                        className = 'col-4 row-5'
                    />

                {/*//? Current Status Select */}
                    <label className = 'col-3 row-6'>Current Status</label>
                    <select className = 'col-4 row-6' name = 'currentStatus' value = {values.currentStatus} onChange = {handleChange}>
                        <option value = ''>--Select Option--</option>
                        <option value = 'applied'>Applied</option>
                        <option value = 'interviewSet'>Interview Phase</option>
                        <option value = 'offer'>Offer</option>
                        <option value = 'rejected'>Rejected</option>
                        <option value = 'contacted'>Contacted</option>
                        <option value = 'other'>Other</option>
                    </select>

                {/*//? Other Notes Textarea*/}
                    <label className = 'col-3'>Other Notes:</label>
                    <textarea
                        name = 'otherNotes'
                        type = 'text'
                        placeholder = 'Other Notes'
                        value = {values.otherNotes}
                        onChange = {handleChange} 
                        className = 'col-4'>
                    </textarea>

                {/*//? Buttons */}
                <div className = 'col-1'>
                    <button className = 'submit-btn' type = 'submit'>Submit</button>
                    <button className = 'back-btn' onClick = {() => {history.push('/')}}>Back To List</button>
                </div>
        </StyledAppForm>
  )
}

export default AppForm



const StyledAppForm = styled.form`
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

