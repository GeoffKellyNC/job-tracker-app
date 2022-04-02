/* eslint-disable no-lone-blocks */
import React from 'react'
import { Link, useHistory } from 'react-router-dom';

import './styles/ApplicationItems.css'

//? Import Icons using React Icons
import { DiGithubAlt } from "react-icons/di";

function ApplicationItems({ application, deleteApp}) {
    //! -- State --
    
    const history = useHistory();



    return (
        <>
            {application.map(app => {
                let containerClass;
                let status = app.currentStatus;
                

                switch(status) {
                    case status = ('rejected'):
                        containerClass = 'app-home-items rejected'
                        break;
                    case status = ('Interview Phase'):
                        containerClass = 'app-home-items interview'
                        break;
                    case status = ('offer'):
                        containerClass = 'app-home-items offer'
                        break;
                    case status = ('applied'):
                        containerClass = 'app-home-items applied'
                        break; 
                    case status = ('contacted'):
                        containerClass = 'app-home-items contacted'
                        break;
                    case status = ('other'):
                        containerClass = 'app-home-items other'
                        break;
                    default:
                        containerClass = 'app-home-items'
                        break;
                    
                   
                    
                }
                return (
                    <div className = {containerClass}  key={app.id}>
                        <img 
                            src={app.companyName.length > 0 ? `https://logo.clearbit.com/${app.companyWeb}`:
                                <DiGithubAlt 
                                    className = '.item-icon' />} 
                            alt={app.companyName} 
                            className = 'item-icon' />
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
                            <button className = 'info-btn' onClick = {() => {history.push(`/${app.id}`)}}>Info</button>
                            <button className = 'del-btn' onClick = {() => deleteApp(app.id)} >Delete</button>
                            <button className = 'edit-btn' onClick = {() => {history.push(`/edit/${app.id}`)}} >Edit</button>
                        </div>
                    </div>
                    )
                })
                }
        </>
    )
}

export default ApplicationItems