import React from 'react'
import styled from 'styled-components'
import { Link, useParams, useHistory } from 'react-router-dom'

// import './styles/AppDetails.css'




function AppDetails({ details }) {

const history = useHistory();


const { appID } = useParams();


//!-- Getting the app details from the API --//
const item = details.find(app => app.id === appID);


    return (
        <StyledAppDetails className = 'app-details'>
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
        </StyledAppDetails>
    )
}

export default AppDetails


//!-- Styling --//
const StyledAppDetails = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    .company-info, .job-info, .contact-info, .status-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    }
    .company-info h2, .job-info h2, .contact-info h2, .status-info h2 {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 10px;
        color: black;
    }
    .company-info p, .job-info p, .contact-info p, .status-info p {
        font-size: 1rem;
        margin-bottom: 10px;
    }
    .company-info span, .job-info span, .contact-info span, .status-info span {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 10px;
    }
    button {
        font-size: 1rem;
        margin-top: 10px;
        border: none;
        background-color: #f5f5f5;
        border-radius: 10px;
        padding: 10px;
        box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
    }



`