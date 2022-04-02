import React from 'react'

import { useHistory } from 'react-router-dom'

import './styles/appForm.css'

function AppForm({ values, update, submit }) {

const history = useHistory();

const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    update(name,value)
}

  return (
    <div className = 'form-container'>
        <form onSubmit={submit}>

            {/*//? Company Name Input*/}
                <label>Company Name</label>
                <input
                    name = 'companyName'
                    type = 'text'
                    placeholder='Company Name'
                    value = {values.companyName}
                    onChange = {handleChange}
                    />

            {/*//? Company Phone Input*/}
                <label>Company Phone</label>
                <input 
                    name = 'companyPhone'
                    type='tel'
                    placeholder = 'Company Phone Number'
                    value = {values.companyPhone}
                    onChange = {handleChange}
                />

            {/*//? Company Website Input*/}
                <label>Company Web</label>
                <input
                    name = 'companyWeb'
                    type = 'text'
                    placeholder = 'Company Web Address'
                    value = {values.companyWeb}
                    onChange = {handleChange}
                />

            {/*//? Job Title Input*/}
                <label>Job Title</label>
                <input
                    name = 'jobTitle'
                    type = 'text'
                    placeholder = 'Job Title'
                    value = {values.jobTitle}
                    onChange = {handleChange}
                />

            {/*//? Date Applied Input*/}
                <label>Date Applied</label>
                <input
                    name = 'dateApplied'
                    type = 'date'
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
                <button class = 'back-btn' onClick = {() => {history.push('/')}}>Back To List</button>
            </div>
        </form>
    </div>
  )
}

export default AppForm