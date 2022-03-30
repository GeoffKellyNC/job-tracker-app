import React from 'react'
import { Link, useParams } from 'react-router-dom'
function AppDetails({ details }) {

    // console.log(details)
const { appID } = useParams();

const app = details.find(app => app.id === appID);


    return (
        <div>
            <div key={app.id}>
                <p>App ID: {app.id}</p>
                <h2>{app.companyName}</h2>
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
                <p>{app.otherNotes}</p>
                <Link to = '/'>Go Home</Link>
            </div>     
        </div>
    )
}

export default AppDetails