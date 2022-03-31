import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function EditForm({ details, updateEdit }) {
  
  const { appID } = useParams();
//? Initializing state to the Application to be edited
  const [editApp, setEditApp] = useState(details.find(app => app.id === appID))

  

  //? Handling Form Change Event
  const handleChange = (e) => {
    const {name,value} = e.target
    setEditApp({...editApp, [name]: value})
  }


  return (
    <div>
      <form onSubmit={(e) => updateEdit(e, editApp)}>
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
                <button type = 'submit'>Submit</button>
        </form>
    </div>
  )
}

export default EditForm