import React from 'react'

import './styles/appForm.css'

function AppForm({ values, update, submit }) {

const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    update(name,value)
}

  return (
    <div className = 'form-container'>
        <form onSubmit={submit}>
            <div className = 'form-inputs'>
                <label>Company Name</label>
                <input
                    name = 'companyName'
                    type = 'text'
                    placeholder='Company Name'
                    value = {values.companyName}
                    onChange = {handleChange}
                    />
                <label>Company Phone</label>
                <input 
                    name = 'companyPhone'
                    type='tel'
                    placeholder = 'Company Phone Number'
                    value = {values.companyPhone}
                    onChange = {handleChange}
                />
                <label>Company Web</label>
                <input
                    name = 'companyWeb'
                    type = 'text'
                    placeholder = 'Company Web Address'
                    value = {values.companyWeb}
                    onChange = {handleChange}
                />
                <label>Job Title</label>
                <input
                    name = 'jobTitle'
                    type = 'text'
                    placeholder = 'Job Title'
                    value = {values.jobTitle}
                    onChange = {handleChange}
                />
                <label>Date Applied</label>
                <input
                    name = 'dateApplied'
                    type = 'date'
                    placeholder = 'Date Applied'
                    value = {values.dateApplied}
                    onChange = {handleChange}
                />
                <label>Job Discovery</label>
                <input
                    name = 'jobDiscovery'
                    type = 'text'
                    placeholder = 'Job Discovery'
                    value = {values.jobDiscovery}
                    onChange = {handleChange}
                />
                <label>Salary Info</label>
                <input
                    name = 'salaryInfo'
                    type = 'text'
                    placeholder = 'Salary Info'
                    value = {values.salaryInfo}
                    onChange = {handleChange}
                />
                <label>Contacted</label>
                <select name = 'contactQues' value = {values.contactQues} onChange = {handleChange}>
                    <option value = ''>--Select Option--</option>
                    <option value = 'Yes'>Yes</option>
                    <option value = 'No'>No</option>
                </select>
                <label>Contact Name</label>
                <input
                    name = 'contactName'
                    type = 'text'
                    placeholder = 'Contact Name'
                    value = {values.contactName}
                    onChange = {handleChange}
                />
                <label>Contact Phone</label>
                <input
                    name = 'contactPhone'
                    type = 'tel'
                    placeholder = 'Contact Phone Number'
                    value = {values.contactPhone}
                    onChange = {handleChange}
                />
                <label>Contact Email</label>
                <input
                    name = 'contactEmail'
                    type = 'email'
                    placeholder = 'Contact Email'
                    value = {values.contactEmail}
                    onChange = {handleChange}
                />
                <label>Contact Position</label>
                <input
                    name = 'contactPosition'
                    type = 'text'
                    placeholder = 'Contact Position'
                    value = {values.contactPosition}
                    onChange = {handleChange}
                />
                <label>Current Status</label>
                <select name = 'currentStatus' value = {values.currentStatus} onChange = {handleChange}>
                    <option value = 'applies'>Applied</option>
                    <option value = 'interviewSet'>Interview Phase</option>
                    <option value = 'offer'>Offer</option>
                    <option value = 'rejected'>Rejected</option>
                    <option value = 'contacted'>Contacted</option>
                    <option value = 'other'>Other</option>
                </select>
                <label>Other Notes:</label>
                <textarea
                    name = 'otherNotes'
                    type = 'text'
                    placeholder = 'Other Notes'
                    value = {values.otherNotes}
                    onChange = {handleChange} >
                </textarea>
                <button type = 'submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}

export default AppForm