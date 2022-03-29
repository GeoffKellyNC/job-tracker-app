import React from 'react'

function ApplicationItems({ application }) {
  return (
      <div>
          {
                application.map(app => {
                    return(
                        <div key = {app.id}>
                            <span >Company Name:<span>{app.companyName}</span></span>
                            <span >Company Phone:<span>{app.companyPhone}</span></span>
                            <span >Company Web:<span>{app.companyWeb}</span></span>
                            <span >Job Title:<span>{app.jobTitle}</span></span>
                            <span >Date Applied:<span>{app.dateApplied}</span></span>
                            <span >Job Discovery:<span>{app.jobDiscovery}</span></span>
                            <span >Salary Info:<span>{app.salaryInfo}</span></span>
                            <span >Contact Ques:<span>{app.contactQues}</span></span>
                            <span >Contact Name:<span>{app.contactName}</span></span>
                            <span >Contact Phone:<span>{app.contactPhone}</span></span>
                            <span >Contact Email:<span>{app.contactEmail}</span></span>
                            <span >Contact Position:<span>{app.contactPosition}</span></span>
                            <span >Current Status:<span>{app.currentStatus}</span></span>
                            <span >Current Status Date:<span>{app.currentStatusDate}</span></span>
                            <span >Current Status Notes:<span>{app.currentStatusNotes}</span></span>
                            <span >Other Notes:<span>{app.otherNotes}</span></span>
                        </div>
                        
                    )
                }) 
          }
      </div>
  )
}

export default ApplicationItems