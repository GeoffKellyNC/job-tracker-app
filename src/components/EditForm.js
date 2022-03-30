import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'

function EditForm({ details, updateEdit }) {
  const [newApp, setNewApp] = useState(details)
  const history = useHistory();

  const { appID } = useParams();

  const item = details.find(app => app.id === appID);

  

  const handleChange = (e) => {

  }

  const handleSubmit = (e) => {
 
  
  }



  return (
    <div>
      <form onSubmit={handleSubmit}>
                <label>Company Name</label>
                <input
                    name = 'companyName'
                    type = 'text'
                    placeholder='Company Name'
                    value = {item.companyName}
                    onChange = {handleChange}
                    />
                <label>Company Phone</label>
                <input 
                    name = 'companyPhone'
                    type='tel'
                    placeholder = 'Company Phone Number'
                    value = {item.companyPhone}
                    onChange = {handleChange}
                />
                <label>Company Web</label>
                <input
                    name = 'companyWeb'
                    type = 'text'
                    placeholder = 'Company Web Address'
                    value = {item.companyWeb}
                    onChange = {handleChange}
                />
                <label>Job Title</label>
                <input
                    name = 'jobTitle'
                    type = 'text'
                    placeholder = 'Job Title'
                    value = {item.jobTitle}
                    onChange = {handleChange}
                />
                <label>Date Applied</label>
                <input
                    name = 'dateApplied'
                    type = 'date'
                    placeholder = 'Date Applied'
                    value = {item.dateApplied}
                    onChange = {handleChange}
                />
                <label>Job Discovery</label>
                <input
                    name = 'jobDiscovery'
                    type = 'text'
                    placeholder = 'Job Discovery'
                    value = {item.jobDiscovery}
                    onChange = {handleChange}
                />
                <label>Salary Info</label>
                <input
                    name = 'salaryInfo'
                    type = 'text'
                    placeholder = 'Salary Info'
                    value = {item.salaryInfo}
                    onChange = {handleChange}
                />
                <label className = 'col-3 row-1'>Contacted</label>
                <select className = 'col-4 row-1' name = 'contactQues' value = {item.contactQues} onChange = {handleChange}>
                    <option value = ''>--Select Option--</option>
                    <option value = 'Yes'>Yes</option>
                    <option value = 'No'>No</option>
                </select>
                <label className = 'col-3 row-2'>Contact Name</label>
                <input
                    name = 'contactName'
                    type = 'text'
                    placeholder = 'Contact Name'
                    value = {item.contactName}
                    onChange = {handleChange}
                    className = 'col-4 row-2'
                />
                <label className = 'col-3 row-3' >Contact Phone</label>
                <input
                    name = 'contactPhone'
                    type = 'tel'
                    placeholder = 'Contact Phone Number'
                    value = {item.contactPhone}
                    onChange = {handleChange}
                    className = 'col-4 row-3'
                />
                <label className = 'col-3 row-4'>Contact Email</label>
                <input
                    name = 'contactEmail'
                    type = 'email'
                    placeholder = 'Contact Email'
                    value = {item.contactEmail}
                    onChange = {handleChange}
                    className = 'col-4 row-4'
                />
                <label className = 'col-3 row-5'>Contact Position</label>
                <input
                    name = 'contactPosition'
                    type = 'text'
                    placeholder = 'Contact Position'
                    value = {item.contactPosition}
                    onChange = {handleChange}
                    className = 'col-4 row-5'
                />
                <label className = 'col-3 row-6'>Current Status</label>
                <select className = 'col-4 row-6' name = 'currentStatus' value = {item.currentStatus} onChange = {handleChange}>
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
                    value = {item.otherNotes}
                    onChange = {handleChange} 
                    className = 'col-4'>
                </textarea>
                <button type = 'submit'>Submit</button>
                <button class = 'back-btn' onClick = {() => {history.push('/')}}>Back To List</button>
        </form>
    </div>
  )
}

export default EditForm