import React from 'react'

import './styles/ApplicationItems.css'

function ApplicationItems({ application }) {
    return (
        <div>
            {
                application.map(app => {
                    return(
                        <div className="application-item" key={app.id}>
                            <h3>Company: 
                                <span>{app.companyName}</span>
                            </h3>
                            <h3>Job Title: 
                                <span>{app.jobTitle}</span>
                            </h3>
                            <h3>Date Applied:
                                <span>{app.dateApplied}</span>
                            </h3>
                        </div>
                                
                            
                    )
                }) 
            }
        </div>
    )
}

export default ApplicationItems