import React from 'react'
import { Link, useHistory } from 'react-router-dom';

import './styles/ApplicationItems.css'

function ApplicationItems({ application, deleteApp}) {
    
    const history = useHistory();

    return (
        <>
            {application.map(app => {
                return (
                    <div className = 'app-home-items'  key={app.id}>
                        <Link to={`/${app.id}`}>
                            <h4>{app.companyName}</h4></Link>
                        <h3>Position:
                            <p>{app.jobTitle}</p>
                        </h3>
                        <h3>Date Applied:
                            <p>{app.dateApplied}</p>
                        </h3>
                        <h3> Contacted:
                            <p>{app.contactQues}</p>
                        </h3>
                        <h3>Status:
                            <p>{app.currentStatus}</p>
                        </h3>
                        <div className = 'btn-container'>
                            <button onClick = {() => {history.push(`/${app.id}`)}}>Info</button>
                            <button onClick = {() => deleteApp(app.id)} >Delete</button>
                            <button onClick = {() => {}} >Edit</button>
                        </div>
                    </div>
                    )
                })
                }
        </>
    )
}

export default ApplicationItems