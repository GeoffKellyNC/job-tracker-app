import React from 'react'
import { Link, useRouteMatch, useHistory } from 'react-router-dom';

function Home({ application }) {
    
    const history = useHistory();

    return (
        <div>
            <div>
                <h2>Below are Your Current Applications:</h2>
                <Link to={'/form'}>Add New Application</Link>
            </div>
            <div>
                {application.map(app => {
                    return (
                        <div key={app.id}>
                            <Link to={`/${app.id}`}>{app.companyName}</Link>
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
                            <Link to = {`/${app.id}`}>View Application Details</Link>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Home