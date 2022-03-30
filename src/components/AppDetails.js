import React from 'react'
import { Link, useParams } from 'react-router-dom'
function AppDetails({ details }) {

    // console.log(details)
const { appID } = useParams();

const item = details.find(app => app.id === appID);


    return (
        <div>
            <div key={item.id}>
                <p>App ID: {item.id}</p>
                <h2>{item.companyName}</h2>
                <h3>Position:
                    <p>{item.jobTitle}</p>
                </h3>
                <h3>Date Applied:
                    <p>{item.dateApplied}</p>
                </h3>
                <h3>
                    {item.companyName} Phone:
                    <p>{item.companyPhone}</p>
                </h3>
                <h3> Contacted:
                    <p>{item.contactQues}</p>
                </h3>
                <h3>Status:
                    <p>{item.currentStatus}</p>
                </h3>
                <p>{item.otherNotes}</p>
                <Link to = '/'>Go Home</Link>
            </div>     
        </div>
    )
}

export default AppDetails