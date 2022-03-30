import React from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'

import './styles/AppDetails.css'




function AppDetails({ details }) {

const history = useHistory();


    // console.log(details)
const { appID } = useParams();

const item = details.find(app => app.id === appID);


    return (
        <div className = 'app-details'>
            <div key={item.id}>
                <p>App ID: {item.id}</p>
                <div className = 'company-info'>
                    <h2> Company Info: </h2>
                    <p>Company Name: <span>{item.companyName}</span></p>
                    <p>Company Phone: <span>{item.companyPhone}</span></p>
                    <p>Company Web: <span>{item.companyWeb}</span></p>
                </div>
                <div className = 'job-info'>
                    <h2> Job Info: </h2>
                    <p>Job Title: <span>{item.jobTitle}</span></p>
                    <p>Date Applied: <span>{item.dateApplied}</span></p>
                    <p>Job Discovery: <span>{item.jobDiscovery}</span></p>
                    <p>Salary Info: <span>{item.salaryInfo}</span></p>
                </div>
                <div className = 'contact-info'>
                    <h2> Contact Info: </h2>
                    <p>Contact Name: <span>{item.contactName}</span></p>
                    <p>Contact Phone: <span>{item.contactPhone}</span></p>
                    <p>Contact Email: <span>{item.contactEmail}</span></p>
                    <p>Contact Position: <span>{item.contactPosition}</span></p>
                </div>
                <div className = 'status-info'>
                    <h2> Status Info: </h2>
                    <p>Status: <span>{item.currentStatus}</span></p>
                    <p>Notes: <span>{item.otherNotes}</span></p>
                </div>
                <button onClick={() => history.push('/')}>Back to List</button>
            </div>     
        </div>
    )
}

export default AppDetails