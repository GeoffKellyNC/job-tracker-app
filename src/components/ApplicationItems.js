import React from 'react'

import './styles/ApplicationItems.css'

function ApplicationItems({ application }) {
  return (
      <div>
          {
                application.map(app => {
                    return(
                        <div className = 'app-items' key = {app.id}>
                            <h3>Company Name:
                                <span>{app.companyName}</span>
                            </h3>

                            <h3>Company Phone:
                                <span>{app.companyPhone}</span>
                            </h3>

                            <h3>Company Web:
                                <span>{app.companyWeb}</span>
                            </h3>

                            <h3>Job Title:
                                <span>{app.jobTitle}</span>
                            </h3>

                            <h3>Date Applied:
                                <span>{app.dateApplied}</span>
                            </h3>

                            <h3>Job Discovery:
                                <span>{app.jobDiscovery}</span>
                            </h3>

                            <h3>Salary Info:
                                <span>{app.salaryInfo}</span>
                            </h3>

                            <h3>Contact Ques:
                                <span>{app.contactQues}</span>
                            </h3>

                            <h3>Contact Name:
                                <span>{app.contactName}</span>
                            </h3>

                            <h3>Contact Phone:
                                <span>{app.contactPhone}</span>
                            </h3>

                            <h3>Contact Email:
                                <span>{app.contactEmail}</span>
                            </h3>

                            <h3>Contact Position:
                                <span>{app.contactPosition}</span>
                            </h3>

                            <h3>Current Status:
                                <span>{app.currentStatus}</span>
                            </h3>

                            <h3>Current Status Date:
                                <span>{app.currentStatusDate}</span>
                            </h3>

                            <h3>Current Status Notes:
                                <span>{app.currentStatusNotes}</span>
                            </h3>

                            <h3>Other Notes:
                                <span>{app.otherNotes}</span>
                            </h3>
                        </div>
                        
                    )
                }) 
          }
      </div>
  )
}

export default ApplicationItems